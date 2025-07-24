import React from 'react';
import './HomePage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Logo Perusahaan</div>
        <nav className="nav">
          <a href="#features">Fitur</a>
          <a href="#about">Tentang Kami</a>
          <a href="#contact">Kontak</a>
        </nav>
      </header>
      
      <main className="main-content">
        <section className="hero">
          <h1>Selamat Datang di Website Kami</h1>
          <p>Solusi terbaik untuk kebutuhan Anda</p>
          <button className="cta-button">Mulai Sekarang</button>
        </section>
        
        <section className="features" id="features">
          <h2>Fitur Unggulan</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>Fitur 1</h3>
              <p>Deskripsi singkat tentang fitur pertama.</p>
            </div>
            <div className="card">
              <h3>Fitur 2</h3>
              <p>Deskripsi singkat tentang fitur kedua.</p>
            </div>
            <div className="card">
              <h3>Fitur 3</h3>
              <p>Deskripsi singkat tentang fitur ketiga.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>© 2023 Perusahaan Anda. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
};

export default LandingPage;