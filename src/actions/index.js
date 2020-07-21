import getTriviaApi from '../services/getTriviaApi';
import GetTokenAPI from '../services/GET_TOKEN';

export const requestApi = () => ({ type: 'REQUEST_API' });
export const AddAssignment = ({ value, name }) => ({
  type: 'INPUT',
  value,
  name,
});

export const TimerTest = (timer) => ({
  type: 'TIMER_CHANGE',
  timer,
});
export const makingScore = (score, timer, difficultyScore) => ({
  type: 'GOT_SCORE',
  score,
  timer,
  difficultyScore,
});
export const difficultyAct = (dif) => ({
  type: 'DIFFICULTY',
  dif,
});
export const successApi = (data) => ({ type: 'SUCCESS_API', data });
export const successApiToken = (data) => ({ type: 'SUCCESS_API_TOKEN', data });
export const successApiGravatar = (data) => ({
  type: 'SUCCESS_API_GRAVATAR',
  data,
});
export const nextPage = (index) => ({ type: 'NEXT_QUESTION', index });

export function loginApi(token) {
  return (dispatch) => {
    dispatch(requestApi());
    return getTriviaApi(token).then((data) => dispatch(successApi(data)));
  };
}

export function getTokenApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return GetTokenAPI().then((data) => dispatch(successApiToken(data)));
  };
}
