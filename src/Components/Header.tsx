import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token from local storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
<header className='bg-SkyBlue'>
      <div className='row align-items-center headerStyle'>
        <div className='col-3 text-center'>
          <img src="/QRG-pvt-ltd.png" alt="Company Logo" style={{ maxWidth: '80%' }} />
        </div>
        <div className='col-6'>
          <h1 className='text-center'>Food Portal</h1>
        </div>
        <div className='col-3 text-center'>
        <button className="btn btn-1" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
    <header className='bg-SkyBlue'>
      <div className='row align-items-center headerTab'>
        <div className='col-6 text-center'>
          <img src="/QRG-pvt-ltd.png" alt="Company Logo" style={{ maxWidth: '70%' }} />
        </div>
        <div className='col-6 text-center'>
        <button className="btn btn-1" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
    </div>
    
    
  );
};

export default Header;

