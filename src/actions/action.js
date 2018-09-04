const collectiveActionsConst = {
  CREATE_USER: 'CREATE_USER',
  SHOW_PASSWORD: 'SHOW_PASSWORD',
  SHOW_CONFIRM_PASSWORD: 'SHOW_CONFIRM_PASSWORD',
  EDITING_ID: 'EDIT_ID',
  EDITING_USER: 'EDITING_USER'
}

export const collectiveActions = {
  createUser: () => ({
    type: collectiveActionsConst.CREATE_USER
  }),
  editingId: (id) => ({
    type: collectiveActionsConst.EDITING_ID,
    id: id
  }),
  editingUser: (user) => ({
    type: collectiveActionsConst.EDITING_USER,
    user: user
  }),
  showPassword: () => ({
    type: collectiveActionsConst.SHOW_PASSWORD
  }),
  showConfirmPassword: () => ({
    type: collectiveActionsConst.SHOW_CONFIRM_PASSWORD
  })
}
