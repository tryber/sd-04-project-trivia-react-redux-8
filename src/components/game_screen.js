import React from 'react';
import Header from './header';
import Perguntas from './Perguntas';
import Respostas from './respostas';
import { connect } from 'react-redux';
import {nextPage} from '../actions/index.js'
import Timer from './timer';

const GameScreen = (props) => {
  const { next, index } = props;

  return (
    <div>
      <Header />
      <div>
        <Perguntas />
        <Respostas />
      </div>
      <button data-testid="btn-next" className="buttonNext" onClick={() => next(index)}>
        Próxima Pergunta
      </button>
      <div>
        <Timer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>({
  ...state.listaReducers,
})

const mapDispatchToProps = (dispatch) => ({
  next: (index) => dispatch(nextPage(index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
