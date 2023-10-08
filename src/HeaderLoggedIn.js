// src/HeaderLoggedIn.js

import React from 'react';
import './HeaderLoggedIn.css';

function HeaderLoggedIn({ username, onLogout }) {
  return (
    <header>
      <nav className="header-nav">
        <ul className="menu">
          <li className='first'><a href="/">Home</a></li>
        </ul>
        <div className="user-account">
          <span>Welcome, {username}</span>
          <button className='last' onClick={onLogout}>Logout</button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderLoggedIn;
