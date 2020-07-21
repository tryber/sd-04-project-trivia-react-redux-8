import React from 'react';
import Header from './header';
import Perguntas from './Perguntas';
import Respostas from './respostas';
import Timer from './timer';

const GameScreen = () => (
  <div>
    <Header />
    <div>
      <Perguntas />
      <Respostas />
    </div>
    <div>
      <Timer />
    </div>
    <button>Próxima Pergunta</button>
  </div>
);

export default GameScreen;
