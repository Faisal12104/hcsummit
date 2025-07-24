import React, { useState } from 'react';
import logo from '../../assets/logo_ppsdmmigas.png';
import './AppHeader.css'; // We'll extract the styles to a separate file

const AppHeader = ({ onOpenLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openLogin = (role) => {
    onOpenLogin(role); // Call the prop function passed from parent
    setIsOpen(false); // Close the dropdown
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <img src={logo} alt="Logo PPSDM MIGAS" className="logo" />
        <div className="navigation">
          <nav>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>PRODUCT</li>
              <li>CONSULTATION</li>
            </ul>
          </nav>
        </div>
        <div className="login-dropdown">
          <button className="login-button" onClick={toggleDropdown}>
            LOGIN <span className="arrow">▼</span>
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => openLogin('Superadmin')}>SUPERADMIN</li>
              <li onClick={() => openLogin('Admin Sektor')}>ADMIN SEKTOR</li>
              <li onClick={() => openLogin('Admin Eksternal')}>ADMIN EKSTERNAL</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;