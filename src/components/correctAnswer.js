import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { makingScore } from '../actions';

const Click = (
  score,
  timer,
  difficulty,
  gotScore,
) => {
  gotScore(score, timer, difficulty);
};

const CorrectAnswer = (props) => {
  const { data, index, score, timer, gotScore } = props;
  const resposta = data.results[index];
  const difficulty = resposta.difficulty;
  return (
    <div>
      <button
        onClick={() =>
          Click(
            score,
            timer,
            difficulty,
            gotScore,
          )
        }
        data-testid="correct-answer"
      >
        {resposta.correct_answer}
      </button>
    </div>
  );
};

CorrectAnswer.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
  gotScore: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  gotScore: (score, timer, difficulty) =>
    dispatch(makingScore(score, timer, difficulty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
