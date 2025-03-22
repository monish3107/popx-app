// src/components/WelcomePage.jsx
import { Link } from 'react-router-dom';
import '../index.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container" style={{
      width: '375px',
      height: '812px',
      backgroundColor: '#F7F8F9',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '24px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      margin: '0 auto'
    }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '500',
          color: '#1D2226',
          marginBottom: '8px',
          lineHeight: '1.2'
        }}>
          Welcome to PopX
        </h1>
        <p style={{
          fontSize: '18px',
          fontWeight: '400',
          color: '#1D2226',
          opacity: '0.6',
          lineHeight: '26px'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <Link to="/signup" style={{ textDecoration: 'none', marginBottom: '16px' }}>
        <button style={{
          width: '100%',
          padding: '14px',
          backgroundColor: '#6C25FF',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          lineHeight: '17px'
        }}>
          Create Account
        </button>
      </Link>

      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button style={{
          width: '100%',
          padding: '14px',
          backgroundColor: '#CFCBFF',
          color: '#1D2226',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          lineHeight: '17px'
        }}>
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
};

export default WelcomePage;
