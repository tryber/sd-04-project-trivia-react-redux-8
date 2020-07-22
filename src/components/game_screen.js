import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './header';
import Perguntas from './Perguntas';
import Respostas from './respostas';
import { nextPage } from '../actions/index.js';
import Timer from './timer';

const GameScreen = (props) => {
  const { next, index, freeze } = props;
  if (index === 5) return <Redirect to="/feedback" />;
  return (
    <div>
      <Header />
      <div>
        <Perguntas />
        <Respostas />
      </div>
      {freeze === true ? (
        <button
          data-testid="btn-next"
          className="buttonNext"
          onClick={() => next(index)}
        >
          Próxima Pergunta
        </button>
      ) : (
        <p>Clique na resposta para habilitar o botão de próxima pergunta</p>
      )}
      <div>
        <Timer />
      </div>
    </div>
  );
};

GameScreen.propTypes = {
  freeze: PropTypes.bool,
  index: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  next: (index) => dispatch(nextPage(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
