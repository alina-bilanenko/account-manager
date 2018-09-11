export const usersList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return action.payload
    case 'ADD_USERS':
      return [...state, action.payload]
    case 'UPDATE_USERS':
      return [
        ...state.filter((user) => user.id !== action.payload.id),
        { ...action.payload.user }
      ]
    case 'DELETE_USERS':
      return state.filter((user) => user.id !== action.id)

    default:
      return state
  }
}
