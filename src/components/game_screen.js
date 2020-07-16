import React from 'react';
import Header from './header';

const GameScreen = () => (
  <div>
    <Header />
    <div>
      <p data-testid="question-category">Categoria</p>
      <p data-testid="question-text">Pergunta</p>
    </div>
    <div>
      <div>
        {<p>Resposta 1</p> /* Necessário fazer componente para a Pergunta} */}
      </div>
      <div>
        <p>Resposta 2</p>
      </div>
      <div>
        <p>Resposta 3</p>
      </div>
      <div>
        <p>Resposta 4</p>
      </div>
    </div>
    <button>Próxima Pergunta</button>
  </div>
);

export default GameScreen;
