import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import GameScreen from './components/game_screen';
import Login from './components/Initial_Input';
import Config from './components/Config';
import ButtonConfig from './components/ButtonConfig';
import Feedback from './components/Feedback';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={GameScreen} />
        <Route path="/config" component={Config} />
        <Route path="/config" component={ButtonConfig} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </div>
  );
}
