const collectiveActionsConst = {
  CREATE_USER: 'CREATE_USER',
  SHOW_PASSWORD: 'SHOW_PASSWORD',
  SHOW_CONFIRM_PASSWORD: 'SHOW_CONFIRM_PASSWORD',
  DELETE_USER_ID: 'DELETE_USER_ID',
  OPEN_CONFIRMATION: 'OPEN_CONFIRMATION',
  HAS_UNSAVED_DATA: 'HAS_UNSAVED_DATA',
  FILTER: 'FILTER'
}

export const collectiveActions = {
  createUser: (bool) => ({
    type: collectiveActionsConst.CREATE_USER,
    isCreateUser: bool
  }),
  showPassword: () => ({
    type: collectiveActionsConst.SHOW_PASSWORD
  }),
  showConfirmPassword: () => ({
    type: collectiveActionsConst.SHOW_CONFIRM_PASSWORD
  }),
  deleteUserId: ind => ({
    type: collectiveActionsConst.DELETE_USER_ID,
    index: ind
  }),
  openConfirmation: () => ({
    type: collectiveActionsConst.OPEN_CONFIRMATION
  }),
  hasUnsavedData: bool => ({
    type: collectiveActionsConst.HAS_UNSAVED_DATA,
    hasUnsavedData: bool
  }),
  filter: str => ({
    type: collectiveActionsConst.FILTER,
    filter: str
  })
}
