export const usersList = (state = {}, action) => {
  switch (action.type) {
    case 'LIST_OF_USER':
      return { ...state, listOfUsers: action.users }

    default:
      return state
  }
}
