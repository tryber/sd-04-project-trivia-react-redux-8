import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const Feedback = (props) => {
  // const { acertos, pontos, nome, score } = props;
  const nome = 'nome';
  const score = 'score';
  const acertos = 'acertos';
  const pontos = 'pontos';

  return (
    <div>
      <div>
        <p className="plyer-name" data-testid="header-player-name">
          `Jogador ${nome}`
        </p>
        <p className="pontos" data-testid="header-score">
          `Pontos ${score}`
        </p>
      </div>
      <img
        src="http://www.abrhce.com.br/wp-content/uploads/2017/03/feedback.jpg"
        alt="Minha Imagem"
        className="feedbackGravatar"
        data-testid="header-profile-picture"
      />
      <h1>{score <= 2 ? 'PODERIA SER MELHOR' : 'MANDOU BEM'}</h1>
      <h3 data-testid="feedback-total-question">`Você acertou um total de ${acertos}!`</h3>
      <h3 data-testid="feedback-total-score">`Um total de ${pontos}` </h3>

      {/* <Link to="/ranking" className="ranking">VER RANKING</Link>
      <Link to="/">JOGAR NOVAMENTE</Link> */}
    </div>
  );
};

/* mapStateToProps = (state) => ({
  nome: state.nome,
  score: state.score,
  acertos: state.acertos,
  pontos: state.pontos,
}); */

export default Feedback;
