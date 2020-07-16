import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../trivia.png';

export default const StartPage = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Link to="/login">
      <p>Login</p>
    </Link>
  </div>
);
