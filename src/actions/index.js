import getTriviaApi from '../services/getTriviaApi';

export const requestApi = () => ({ type: 'REQUEST_API' });
export const AddAssignment = ({ value, name }) => ({ type: 'INPUT', value, name });
export const typeQuestions = ({ value, name }) => ({ type: 'TYPE', value, name });
export const categoryQuestions = ({ value, name }) => ({ type: 'CATEGORY', value, name });
export const successApi = (data) => ({ type: 'SUCCESS_API', data });

export function loginApi() {
  console.log('funciona loginApi');
  return (dispatch) => {
    console.log('chegou no reuturn')
    dispatch(requestApi());
    return getTriviaApi().then((data) => dispatch(successApi(data)));
  };
}
