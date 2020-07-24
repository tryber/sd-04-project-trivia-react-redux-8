import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { AddAssignment, successApiGravatar } from '../actions/index';
import { loginApi, getTokenApi } from '../actions/index';
import ButtonConfig from '../components/ButtonConfig';


const BtnFalse = () => (
  <button className="buttonPlay" type="button" data-testid="btn-play" disabled>Jogar</button>
);

const BtnTrue = (token, getToken, login, getGravatar, Email) => {
  const Log = (tokenReal) => {
    getToken();
    localStorage.setItem('token', tokenReal);
    getGravatar(Email);
    login(tokenReal);
  };

  return (
    <button className="buttonPlay" type="button"onClick={() => Log(token)} data-testid="btn-play">
      Jogar
    </button>
  );
};

const Login = (props) => {
  const { add, Id, Email, login, getToken, token, shouldRedirect, getGravatar } = props;
  const state = { player: { name: Id, assertions: 0, score: 0, gravatarEmail: Email } };
  if (shouldRedirect) {
    localStorage.setItem('state', JSON.stringify(state));
    return <Redirect to="/game/" />;
  }
  return (
    <div>
      <ButtonConfig />
      <div>
        <input
          data-testid="input-gravatar-email" name="Email" className="box" type="email" value={Email}
          placeholder="Email" onChange={add}
        />
      </div>
      <div>
        <input
          data-testid="input-player-name" name="Id" className="box" type="text" value={Id}
          placeholder="Nome Jogador" onChange={add}
        />
      </div>
      <div>
        {Email === '' || Id === '' ? (BtnFalse()) : (BtnTrue(token, getToken, login, getGravatar, Email))}
      </div>
    </div>
  );
};

Login.propTypes = {
  Email: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  getGravatar: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  shouldRedirect: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  add: (e) => dispatch(AddAssignment(e.target)),
  login: (token) => dispatch(loginApi(token)),
  getToken: () => dispatch(getTokenApi()),
  getGravatar: (Email) => dispatch(successApiGravatar(Email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
