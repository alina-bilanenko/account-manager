export const usersList = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return [...action.payload];
    case 'ADD_USERS':
      return  [...state, action.payload];
    case 'UPDATE_USERS': {
      const userToUpdate = state.find((user) => user.id === action.payload.id);
      return [
        ...state.filter((user) => user.id !== action.payload.id),
        Object.assign({}, userToUpdate, { done: action.payload.done }),
      ];
    }
    case 'DELETE_USERS':
      return [state.filter((user) => user.id !== action.payload)];

    default:
      return state;
  }
}
