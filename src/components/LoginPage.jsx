import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const validateField = (name, value) => {
    switch (name) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
  
    setErrors(newErrors);
  
    if (Object.values(newErrors).every(error => !error)) {
      console.log("Login attempt with:", formData);
      navigate('/profile'); // goes to profile page
    }
  };

  return (
    <div style={{
      width: '375px',
      height: '812px',
      backgroundColor: '#F7F8F9',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      margin: '0 auto',
      padding: '32px 24px',
      boxSizing: 'border-box'
    }}>
      <div style={{ marginBottom: '8px' }}>
        <h1 style={{
          fontFamily: 'Rubik, sans-serif',
          fontSize: '28px',
          fontWeight: '500', 
          color: '#1D2226',
          lineHeight: '36px',
          margin: '0 0 8px 0'
        }}>
          Signin to your<br />
          PopX account
        </h1>
        <p style={{
          fontFamily: 'Rubik, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          color: '#919191',
          lineHeight: '17px',
          margin: '0'
        }}>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Rubik, sans-serif',
            fontSize: '13px',
            fontWeight: '400', 
            color: '#6C25FF',
            lineHeight: '17px',
            marginBottom: '4px'
          }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '14px',
              fontWeight: '400', 
              color: '#919191',
              lineHeight: '17px',
              border: errors.email ? '1px solid #DD4A3D' : '1px solid #DDDDDD',
              borderRadius: '6px',
              boxSizing: 'border-box',
              outline: 'none'
            }}
            required
          />
          {errors.email && (
            <div style={{
              color: '#DD4A3D',
              fontSize: '12px',
              fontFamily: 'Rubik, sans-serif',
              marginTop: '4px'
            }}>
              {errors.email}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Rubik, sans-serif',
            fontSize: '13px',
            fontWeight: '400', 
            color: '#6C25FF',
            lineHeight: '17px',
            marginBottom: '4px'
          }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              color: '#919191',
              lineHeight: '17px',
              border: errors.password ? '1px solid #DD4A3D' : '1px solid #DDDDDD',
              borderRadius: '6px',
              boxSizing: 'border-box',
              outline: 'none'
            }}
            required
          />
          {errors.password && (
            <div style={{
              color: '#DD4A3D',
              fontSize: '12px',
              fontFamily: 'Rubik, sans-serif',
              marginTop: '4px'
            }}>
              {errors.password}
            </div>
          )}
        </div>

        <button
  type="submit"
  style={{
    width: '100%',
    padding: '12px',
    backgroundColor: '#6C25FF',
    color: '#FFFFFF',
    fontFamily: 'Rubik, sans-serif',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '17px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }}
>
  Login
</button>
      </form>
    </div>
  );
};

export default LoginPage;
