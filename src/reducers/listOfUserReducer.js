export const usersList = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return { users: action.payload };
    case 'ADD_USERS':
      return { users: [...state.users, action.payload] };
    case 'UPDATE_USERS': {
      const userToUpdate = state.users.find((user) => user.id === action.payload.id);
      return { users: [
          ...state.users.filter((user) => user.id !== action.payload.id),
          Object.assign({}, userToUpdate, { done: action.payload.done }),
        ] };
    }
    case 'DELETE_USERS':
      return { users: state.users.filter((user) => user.id !== action.payload) };

    default:
      return state;
  }
}
