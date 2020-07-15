const INITIAL_STATE = {
  Id: '',
};

function listaReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ID':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default listaReducers