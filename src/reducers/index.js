import getGravatarApi from '../services/GET_Gravatar_API';


const INITIAL_STATE = {
  Id: '',
  Email: '',
  isFetching: false,
  data: [],
  token: '',
  shouldRedirect: false,
  imageSrc:"",
};

function listaReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_API':
      return { ...state, isFetching: true };
    case 'INPUT':
      return { ...state, [action.name]: action.value };
    case 'TYPE':
      return { ...state, [action.name]: action.value };
    case 'CATEGORIA':
      return { ...state, [action.name]: action.value };
    case 'SUCCESS_API':
      return { ...state, isFetching: false, shouldRedirect: true, data: action.data };
    case 'SUCCESS_API_TOKEN':
      return { ...state, isFetching: false, token: action.data };
      case 'SUCCESS_API_GRAVATAR':
        return { ...state, imageSrc: getGravatarApi(action.data) };
    default:
      return state;
  }
}

export default listaReducers;
