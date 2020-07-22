import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './header';

const Feedback = (props) => {
  const { Id, score, imageSrc, acertos } = props;
  return (
    <div>
      <Header />
      <div>
        <p className="plyer-name" data-testid="header-player-name">
          `Jogador ${Id}`
        </p>
        <p className="pontos" data-testid="header-score">
          `Pontos ${score}`
        </p>
      </div>
      <img
        src={`${imageSrc}`}
        alt="Minha Imagem"
        className="feedbackGravatar"
        data-testid="header-profile-picture"
      />
      <h1>{acertos <= 2 ? 'PODERIA SER MELHOR' : 'MANDOU BEM'}</h1>
      <h3 data-testid="feedback-total-question">`Você acertou um total de ${acertos}!`</h3>
      <h3 data-testid="feedback-total-score">`Um total de ${score}` </h3>

      <Link to="/ranking" className="ranking">
        VER RANKING
      </Link>
      <Link to="/">JOGAR NOVAMENTE</Link>
    </div>
  );
};

Feedback.propTypes = {
  Id: PropTypes.string.isRequired,
  acertos: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  ...state.listaReducers,
});

export default connect(mapStateToProps)(Feedback);
