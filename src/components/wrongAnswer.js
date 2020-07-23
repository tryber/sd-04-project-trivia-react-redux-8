import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { freezeAct } from '../actions';

const WrongAnswer = (props) => {
  const { data, i, index, freeze, freezeScreen } = props;
  const testid = `wrong-answer-${i}`;
  const resposta = data.results[index].incorrect_answers[i];
  return (
    <div>
      {freeze === true ? <button data-testid={testid} style={{ border: '3px solid rgb(255, 0, 0)' }} disabled>{resposta}</button> : (
        <button onClick={freezeScreen} data-testid={testid}>{resposta}</button>
      )}
    </div>
  );
};

WrongAnswer.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
  freeze: PropTypes.bool.isRequired,
  freezeScreen: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  freezeScreen: () => {
    dispatch(freezeAct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WrongAnswer);
