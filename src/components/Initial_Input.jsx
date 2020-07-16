import React from 'react';

const Login = () => {
  const email = '';
  const name = '';
  return (
    <div>
      <div>
        <input
          data-testid="input-gravatar-email" className="box" type="email" value={email}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          data-testid="input-player-name" className="box" type="text" value={name}
          placeholder="Nome Jogador"
        />
      </div>
      <div>
        buttonDisabled() (
          return (
            <button
              className="buttonPlay" type="button" data-testid="btn-play" disabled
            >Jogar
            </button>
          );)
      </div>
    </div>
  );
};

export default Login;
