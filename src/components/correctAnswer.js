import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { makingScore, freezeAct } from '../actions';

const Click = (score, timer, difficulty, gotScore, freezeScreen, acertos, Id) => {
  gotScore(score, timer, difficulty, acertos);
  freezeScreen();
};

const CorrectAnswer = (props) => {
  const { data, index, score, timer, gotScore, freeze, freezeScreen, acertos, Id, Email } = props;
  const resposta = data.results[index];
  const difficulty = resposta.difficulty;
  const state = {
    player: {
      name: Id,
      assertions: acertos,
      score,
      gravatarEmail: Email,
    }
 };
  localStorage.setItem('state', JSON.stringify(state));
  return (
    <div>
      {freeze === true ? (
        <button data-testid="correct-answer" disabled style={{ border: '3px solid rgb(6, 240, 15)' }}>
          {resposta.correct_answer}
        </button>
      ) : (
        <button
          onClick={() => Click(score, timer, difficulty, gotScore, freezeScreen, acertos, Id)}
          data-testid="correct-answer"
        >
          {resposta.correct_answer}
        </button>
      )}
    </div>
  );
};

CorrectAnswer.propTypes = {
  Email: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
  acertos: PropTypes.number.isRequired,
  data: PropTypes.shape({
    results: PropTypes.arrayOf(Object).isRequired
  }).isRequired,
  freeze: PropTypes.bool.isRequired,
  freezeScreen: PropTypes.func.isRequired,
  gotScore: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  gotScore: (score, timer, difficulty, acertos) =>
    dispatch(makingScore(score, timer, difficulty, acertos)),
  freezeScreen: () => {
    dispatch(freezeAct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
