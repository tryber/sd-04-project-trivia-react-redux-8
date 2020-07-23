import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header/index';
import { resetAct } from '../actions';

const Feedback = (props) => {
  const { acertos, index, reset } = props;
  return (
    <div>
      <Header />
      <h1 data-testid="feedback-text">
        {acertos <= 2 ? 'Podia ser melhor...' : 'Mandou bem!'}
      </h1>
      <h3 data-testid="feedback-total-score">
{acertos}
      </h3>
      <h3 data-testid="feedback-total-question">{index}</h3>
      <img
        src="http://www.abrhce.com.br/wp-content/uploads/2017/03/feedback.jpg"
        alt="Minha Imagem"
        className="feedbackGravatar"
        data-testid="header-profile-picture"
      />
      <Link to="/ranking">
        <button data-testid="btn-ranking">Ver Ranking</button>
      </Link>
      <Link to="/">
        <button data-testid="btn-play-again" onClick={() => reset()}>
          Jogar novamente
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => {
    dispatch(resetAct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
