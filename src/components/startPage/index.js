import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Initial_Input';
import logo from '../../trivia.png';
import Config from '../Config/index';
import Feedback from '../Feedback';
import Ranking from '../Ranking';
import GameScreen from '../game_screen';

const StartPage = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/game" component={GameScreen} />
      <Route path="/config" component={Config} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/feedback" component={Feedback} />
    </Switch>
  </div>
);

export default StartPage;
