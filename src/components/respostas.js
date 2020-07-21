import React from 'react';
import { connect } from 'react-redux';
import CorrectAnswer from './correctAnswer';
import WrongAnswer from './wrongAnswer';

const Respostas = (props) => {
  return (
    <div>
      <CorrectAnswer />
      <WrongAnswer i={0} />
      <WrongAnswer i={1} />
      <WrongAnswer i={2} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

export default connect(mapStateToProps)(Respostas);
