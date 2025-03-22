import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.length < 3 ? 'Name must be at least 3 characters' : '';
      case 'phoneNumber':
        return !/^\d{10}$/.test(value) ? 'Please enter a valid 10-digit number' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email address' : '';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      isAgency: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'companyName' && key !== 'isAgency') {
        newErrors[key] = validateField(key, formData[key]);
      }
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      navigate('/profile');
    }
  };

  return (
    <div className="signup-container" style={{
      width: '375px',
      height: '812px',
      backgroundColor: '#F7F8F9',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      margin: '0 auto',
      overflowY: 'auto'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '500',
          color: '#1D2226',
          marginBottom: '24px',
          lineHeight: '36px'
        }}>
          Create your<br />PopX account
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: '400',
            color: '#6C25FF',
            marginBottom: '6px'
          }}>
            Full Name<span style={{ color: '#DD4A3D' }}>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: errors.fullName ? '1px solid #DD4A3D' : '1px solid #CCCCCC',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#1D2226',
              outline: 'none'
            }}
          />
          {errors.fullName && (
            <div style={{
              color: '#DD4A3D',
              fontSize: '12px',
              marginTop: '4px'
            }}>
              {errors.fullName}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: '400',
            color: '#6C25FF',
            marginBottom: '6px'
          }}>
            Phone number<span style={{ color: '#DD4A3D' }}>*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter 10-Digit Mobile Number"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: errors.phoneNumber ? '1px solid #DD4A3D' : '1px solid #CCCCCC',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#1D2226',
              outline: 'none'
            }}
          />
          {errors.phoneNumber && (
            <div style={{
              color: '#DD4A3D',
              fontSize: '12px',
              marginTop: '4px'
            }}>
              {errors.phoneNumber}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: '400',
            color: '#6C25FF',
            marginBottom: '6px'
          }}>
            Email address<span style={{ color: '#DD4A3D' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="marrydoe@gmail.com"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: errors.email ? '1px solid #DD4A3D' : '1px solid #CCCCCC',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#1D2226',
              outline: 'none'
            }}
          />
          {errors.email && (
            <div style={{
              color: '#DD4A3D',
              fontSize: '12px',
              marginTop: '4px'
            }}>
              {errors.email}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: '400',
            color: '#6C25FF',
            marginBottom: '6px'
          }}>
            Password<span style={{ color: '#DD4A3D' }}>*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: errors.password ? '1px solid #DD4A3D' : '1px solid #CCCCCC',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#1D2226',
              outline: 'none'
            }}
          />
          {errors.password && (
            <div style={{
              color: '#DD4A3D',
              fontSize: '12px',
              marginTop: '4px'
            }}>
              {errors.password}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: '400',
            color: '#6C25FF',
            marginBottom: '6px'
          }}>
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Marry Doe Inc."
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #CCCCCC',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#1D2226',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '100px' }}>
  <p style={{
    fontSize: '13px',
    fontWeight: '400',
    color: '#1D2226',
    marginBottom: '12px'
  }}>
    Are you an Agency?<span style={{ color: '#DD4A3D' }}>*</span>
  </p>
  <div style={{ display: 'flex', gap: '20px' }}>
    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <div style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '2px solid #6C25FF',
        backgroundColor: formData.isAgency === 'yes' ? '#6C25FF' : 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '8px'
      }}>
        {formData.isAgency === 'yes' && (
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'white'
          }}></div>
        )}
      </div>
      <input
        type="radio"
        name="isAgency"
        value="yes"
        checked={formData.isAgency === 'yes'}
        onChange={() => handleRadioChange('yes')}
        style={{ display: 'none' }}
      />
      <span style={{ fontSize: '14px', color: '#1D2226' }}>Yes</span>
    </label>

    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <div style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '2px solid #6C25FF',
        backgroundColor: formData.isAgency === 'no' ? '#6C25FF' : 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '8px'
      }}>
        {formData.isAgency === 'no' && (
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'white'
          }}></div>
        )}
      </div>
      <input
        type="radio"
        name="isAgency"
        value="no"
        checked={formData.isAgency === 'no'}
        onChange={() => handleRadioChange('no')}
        style={{ display: 'none' }}
      />
      <span style={{ fontSize: '14px', color: '#1D2226' }}>No</span>
    </label>
  </div>
</div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#6C25FF',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            lineHeight: '17px',
            marginTop: 'auto'
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
