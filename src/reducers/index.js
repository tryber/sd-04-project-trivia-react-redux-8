const INITIAL_STATE = {
  Id: '',
  Email: '',
  isFetching: true,
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
      return { ...state, isFething: false, data: action.results };
    default:
      return state;
  }
}

export default listaReducers;
