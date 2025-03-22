// src/Router.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;