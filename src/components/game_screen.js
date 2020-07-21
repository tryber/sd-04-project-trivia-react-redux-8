import React from 'react';
import Header from './header';
import Perguntas from './Perguntas';
import Respostas from './respostas';

const GameScreen = () => (
  <div>
    <Header />
    <div>
      <Perguntas />
      <Respostas />
    </div>
    <button>Próxima Pergunta</button>
  </div>
);

export default GameScreen;
