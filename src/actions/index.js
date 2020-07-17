import getTriviaApi from '../services/getTriviaApi';
import GetTokenAPI from '../services/GET_TOKEN';

export const requestApi = () => ({ type: 'REQUEST_API' });
export const AddAssignment = ({ value, name }) => ({
  type: 'INPUT',
  value,
  name,
});
export const typeQuestions = ({ value, name }) => ({
  type: 'TYPE',
  value,
  name,
});
export const categoryQuestions = ({ value, name }) => ({
  type: 'CATEGORY',
  value,
  name,
});
export const successApi = (data) => ({ type: 'SUCCESS_API', data });
export const successApiToken = (data) => ({ type: 'SUCCESS_API_TOKEN', data });

export function loginApi(token) {
  return (dispatch) => {
    dispatch(requestApi());
    return getTriviaApi(token).then((data) => dispatch(successApi(data)));
  };
}

export function getTokenApi() {
  console.log('funciona loginApi');
  return (dispatch) => {
    console.log('chegou no reuturn');
    dispatch(requestApi());
    return GetTokenAPI().then((data) => dispatch(successApiToken(data)));
  };
}
