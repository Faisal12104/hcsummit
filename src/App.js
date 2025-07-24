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
  );
}

export default App;
