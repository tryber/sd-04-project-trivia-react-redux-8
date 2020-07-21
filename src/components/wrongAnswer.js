import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const WrongAnswer = (props) => {
  const { data, i, index } = props;
  const testid = `wrong-answer-${i}`;
  const resposta = data.results[index].incorrect_answers[i];
  return (
    <div>
      <button data-testid={testid}>{resposta}</button>
    </div>
  );
};

WrongAnswer.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  i: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

export default connect(mapStateToProps)(WrongAnswer);
