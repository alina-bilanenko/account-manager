const paginationActionsConst = {
  PAGE: 'PAGE',
  ROWS_PER_PAGE: 'ROWS_PER_PAGE',
  COUNT: 'COUNT'
}

export const paginationActions = {
  page: num => ({
    type: paginationActionsConst.PAGE,
    page: num
  }),
  rowsPerPage: num => ({
    type: paginationActionsConst.ROWS_PER_PAGE,
    rowsPerPage: num
  }),
  count: num => ({
    type: paginationActionsConst.COUNT,
    count: num
  })
}
