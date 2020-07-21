import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TimerTest } from '../actions';

const Timer = (props) => {
  const { timer, timerCount } = props;
  setTimeout(() => {
    timerCount(timer - 1);
  }, 1000);
  return (
    <div>
      <p>Timer: {timer}</p>
    </div>
  );
};

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  timerCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  timerCount: (timer) => dispatch(TimerTest(timer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
