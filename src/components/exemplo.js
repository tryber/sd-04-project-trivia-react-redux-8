const respostaCerta = 'z';
const respostaerrada1 = ['r', 0];
const respostaerrada2 = ['t', 1];
const respostaerrada3 = ['b', 2];
const array = [
  respostaCerta,
  respostaerrada1,
  respostaerrada2,
  respostaerrada3,
];
const arrayMisturada = array.sort();
const objPerguntas = {};

const SortArray = (Arr) => {
  Arr.forEach((pergunta, index = 0) => {
    const key = `pergunta${index}`;
    if (pergunta === respostaCerta) {
      objPerguntas.push({ [key]: pergunta, code: 'correct-answer' });
      index = index + 1;
      console.log(objPerguntas);
    } else {
      objPerguntas.push({ [key]: pergunta, code: 'correct-answer' });
      index = index + 1;
      console.log(objPerguntas);
    }
  });
};

SortArray(arrayMisturada);
