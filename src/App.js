import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import GameScreen from './components/game_screen';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />{' '}
        {/* FAZER COMPONENTE PARA ESTA IMAGEM */}
        <Link to="/game">
          <p>SUA VEZ</p>
        </Link>
      </header>
      <Switch>
        <Route path="/game" component={GameScreen} />
      </Switch>
    </div>
  );
}
