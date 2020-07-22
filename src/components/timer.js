import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TimerTest, freezeAct } from '../actions';

const Timer = (props) => {
  const { timer, timerCount, freeze, freezeScreen } = props;
  if (timer > 0 && freeze === false) {
    setTimeout(() => {
      timerCount(timer);
    }, 1000);
  }
  return timer > 0 ? (
    <div>
      <p>Timer: {timer}</p>{' '}
    </div>
  ) : (
    <div>
      <p>{freezeScreen()}Times up</p>
    </div>
  );
};

Timer.propTypes = {
  freeze: PropTypes.bool.isRequired,
  freezeScreen: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  timerCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  timerCount: (timer) => dispatch(TimerTest(timer)),
  freezeScreen: () => {
    dispatch(freezeAct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
