import React, { useState } from 'react';
import AppHeader from '../layout/AppHeader';
import AppFooter from '../layout/AppFooter';
import LoginBox from '../auth/LoginBox';
import './LoginPage.css';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleOpenLogin = (role) => {
    console.log('Role diterima:', role);
    setSelectedRole(role);
    setShowLogin(true);
  };

  return (
    <div className="login-page">
      <AppHeader onOpenLogin={handleOpenLogin} />
      
      <main className="login-container">
        <h1 className="title">Bridging Your Success</h1>
      </main>

      <AppFooter />

      {/* Tampilkan LoginBox jika showLogin true */}
      {showLogin && (
        <LoginBox 
          role={selectedRole} 
          onClose={() => setShowLogin(false)} 
        />
      )}
    </div>
  );
};

export default LoginPage;