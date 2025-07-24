import React from 'react';
import './AppFooter.css';

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-item">
          <span className="footer-icon">📍</span>
          <span className="footer-text">
            Jl. Sorogo No.1, Karangboyo, Kec. Cepu, Kabupaten Blora, 
            Jawa Tengah 58315, Indonesia
          </span>
        </div>
        <div className="footer-item">
          <span className="footer-icon">✉</span>
          <span className="footer-text">info.ppsdm.migas@esdm.go.id</span>
        </div>
        <div className="footer-item">
          <span className="footer-icon">📞</span>
          <span className="footer-text">082328434329 (pelayanan terpadu)</span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;