import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetAct } from '../actions';

const Ranking = (props) => {
  const { reset } = props
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      <Link to="/">
        <button data-testid="btn-go-home" onClick={() => reset()}>
          Início
        </button>
      </Link>
      <p>rankingList</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  reset: () => {
    dispatch(resetAct());
  },
});

export default connect(null, mapDispatchToProps)(Ranking);
