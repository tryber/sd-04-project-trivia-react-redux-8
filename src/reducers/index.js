const INITIAL_STATE = {
  Id: '',
  Email: '',
};

function listaReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ID':
      return { ...state, [action.name]: action.value };
    case 'EMAIL':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default listaReducers;
