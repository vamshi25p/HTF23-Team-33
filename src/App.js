import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderLoggedIn from './HeaderLoggedIn';
import Hero from './Hero';
import Footer from './Footer';
import NextPage from './NextPage';
import ProblemsPage from './ProblemsPage';
import Login from './Login'; // Import the Login component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        {loggedIn ? (
          <>
            <HeaderLoggedIn username={username} onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/nextpage" element={<NextPage />} />
              <Route path="/problems" element={<ProblemsPage />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
