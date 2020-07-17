import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import GameScreen from './components/game_screen';
import Login from './components/Initial_Input';
import StartPage from './components/startPage';
import Config from './components/Config';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/login" component={Login} />
        <Route path="/game" component={GameScreen} />
        <Route path="/config" component={Config} />
      </Switch>
    </div>
  );
}
