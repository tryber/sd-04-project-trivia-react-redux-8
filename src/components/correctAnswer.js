import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { makingScore, difficultyAct } from '../actions';

const Click = (
  data,
  index,
  score,
  timer,
  difficultyScore,
  difficulty,
  gotScore,
) => {
  gotScore(score, timer, difficultyScore);
};

const CorrectAnswer = (props) => {
  const { data, index, score, timer, difficultyScore, difficulty, gotScore } = props;
  const resposta = data.results[index];
  return (
    <div>
      <button
        onClick={() =>
          Click(
            data,
            index,
            score,
            timer,
            difficultyScore,
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
  difficulty: PropTypes.func.isRequired,
  difficultyScore: PropTypes.number.isRequired,
  gotScore: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  difficulty: (dif) => dispatch(difficultyAct(dif)),
  gotScore: (score, timer, difficultyScore) =>
    dispatch(makingScore(score, timer, difficultyScore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
