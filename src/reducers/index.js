import getGravatarApi from '../services/GET_Gravatar_API';

const INITIAL_STATE = {
  Id: '',
  Email: '',
  isFetching: false,
  data: [],
  token: '',
  shouldRedirect: false,
  imageSrc: '',
  index: 0,
  score: 0,
  timer: 30,
  difficultyScore: 0,
};

const difficulty = (dif) => {
  if (dif === 'easy') {
    return 1;
  } else if (dif === 'medium') {
    return 2;
  }
  return 3;
};

const ScoreCalculator = (score, timer, difficultyScore) => {
  console.log(score);
  console.log(timer);
  console.log(difficultyScore);
  const newScore = score + (10 + (timer * difficultyScore));
  return newScore;
};

function listaReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_API':
      return { ...state, isFetching: true };
    case 'INPUT':
      return { ...state, [action.name]: action.value };
    case 'SUCCESS_API':
      return { ...state, isFetching: false, shouldRedirect: true, data: action.data };
    case 'SUCCESS_API_TOKEN':
      return { ...state, isFetching: false, token: action.data };
    case 'SUCCESS_API_GRAVATAR':
      return { ...state, imageSrc: getGravatarApi(action.data) };
    case 'GOT_SCORE':
      return {
        ...state,
        score: ScoreCalculator(
          action.score,
          action.timer,
          action.difficultyScore,
        ),
      };
    case 'DIFFICULTY':
      return { ...state, difficultyScore: difficulty(action.dif) };
    default:
      return state;
  }
}

export default listaReducers;
