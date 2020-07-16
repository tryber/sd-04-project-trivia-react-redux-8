import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { AddAssignment } from '../actions/index';


const Login = (props) => {
  const { add, Id, Email } = props;
  return (
    <div>
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
        {Email === '' || Id === '' ? (
          <button
            className="buttonPlay" type="button" data-testid="btn-play" disabled
          >Jogar
          </button>
        ) : (
          <button className="buttonPlay" type="button" data-testid="btn-play">Jogar</button>
        )}
      </div>
    </div>
  );
};

Login.propTypes = {
  Email: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  add: (e) => dispatch(AddAssignment(e.target)),
});
//teste
export default connect(mapStateToProps, mapDispatchToProps)(Login);
