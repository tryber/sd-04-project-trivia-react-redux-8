const INITIAL_STATE = {
  Id: '',
  Email: '',
};

function listaReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INPUT':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default listaReducers;
