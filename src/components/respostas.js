import React from 'react';
import { connect } from 'react-redux';
import CorrectAnswer from './correctAnswer';
import WrongAnswer from './wrongAnswer';

const Respostas = (props) => {
  const { data, index } = props;
  if (data.results[index].type === 'boolean') {
    return (
      <div>
        <CorrectAnswer />
        <WrongAnswer i={0} />
      </div>
    );
  }
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
