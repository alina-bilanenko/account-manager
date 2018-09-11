export const pagination = (state = {}, action) => {
  switch (action.type) {
    case 'PAGE':
      return { ...state, page: action.page }
    case 'ROWS_PER_PAGE':
      return { ...state, rowsPerPage: action.rowsPerPage }
    case 'COUNT':
      return { ...state, count: action.count }

    default:
      return state
  }
}
