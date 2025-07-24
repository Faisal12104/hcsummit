<<<<<<< HEAD
import React from 'react';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>   
>>>>>>> b6234e1fcfdfb5c760221ea2d199e81a8e116624
  );
}

export default App;