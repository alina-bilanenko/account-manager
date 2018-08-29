export const createUser = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEW_USER':
      return { ...state, addNewUser: action.user }

    default:
      return state
  }
}
