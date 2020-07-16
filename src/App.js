import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import GameScreen from './components/game_screen';
import Login from './components/Initial_Input';
import StartPage from './components/startPage';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={StartPage} />
        <Route path="/game" component={GameScreen} />
      </Switch>
    </div>
  );
}
