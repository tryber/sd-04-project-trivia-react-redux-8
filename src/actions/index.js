import getTriviaApi from '../services/getTriviaApi';
import GetTokenAPI from '../services/GET_TOKEN';
import getGravatarApi from '../services/GET_Gravatar_API';

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
export const successApiGravatar = (data) => ({ type: 'SUCCESS_API_GRAVATAR', data });


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
