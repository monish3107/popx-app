import { useNavigate } from 'react-router-dom';
import '../index.css';
import cameraIcon from '../assets/camera-icon.svg';
import profileImage from '../assets/image.png'; // Add this import

const ProfilePage = () => {
  const navigate = useNavigate();
  
  // Mock user data - in a real app, you'd get this from context/redux/api
  const userData = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    bio: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'
  };

  return (
    <div className="profile-container" style={{
      width: '375px',
      height: '812px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      margin: '0 auto',
      overflowY: 'auto',
      position: 'relative'
    }}>
      <div style={{
        padding: '16px 24px',
        borderBottom: 'none'
      }}>
        <h1 style={{
          fontSize: '20px',
          fontWeight: '200',
          color: '#1D2226',
          margin: 0
        }}>
          Account Settings
        </h1>
      </div>

      <div style={{
        padding: '24px',
        backgroundColor: '#F7F8F9',
        borderBottom: '1px dashed #E0E0E0',
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '16px'
        }}>
          <div style={{ position: 'relative', marginRight: '16px' }}>
            {/* Profile image container remains unchanged */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid #E0E0E0'
            }}>
              <img 
                src={profileImage}
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Camera icon remains unchanged */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: '24px',
              height: '24px',
              backgroundColor: '#6C25FF',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
              <img 
                src={cameraIcon} 
                alt="Camera" 
                style={{ width: '14px', height: '14px' }}
              />
            </div>
          </div>
          
          <div>
            <h2 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1D2226',
              margin: '0 0 2px 0'
            }}>
              {userData.name}
            </h2>
            <p style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#6B7280',
              margin: '0'
            }}>
              {userData.email}
            </p>
          </div>
        </div>

        {/* Bio text moved below */}
        <p style={{
          fontSize: '14px',
          fontWeight: '400',
          color: '#1D2226',
          margin: 0,
          lineHeight: '20px',
          maxWidth: '100%'
        }}>
          {userData.bio}
        </p>
      </div>

      {/* Empty space with dotted border */}
      <div style={{
        flex: 1,
        borderBottom: '1px dashed #E0E0E0',
        backgroundColor: '#F7F8F9'
      }}></div>
      
      {/* Bottom dashed border */}
      <div style={{
        height: '24px',
        borderBottom: '1px dashed #E0E0E0',
        backgroundColor: '#F7F8F9'
      }}></div>
    </div>
  );
};

export default ProfilePage;