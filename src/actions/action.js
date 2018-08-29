const collectiveActionsConst = {
  CREATE_USER: 'CREATE_USER',
  SHOW_PASSWORD: 'SHOW_PASSWORD',
  SHOW_CONFIRM_PASSWORD: 'SHOW_CONFIRM_PASSWORD'
}

export const collectiveActions = {
  createUser: () => ({
    type: collectiveActionsConst.CREATE_USER
  }),
  showPassword: () => ({
    type: collectiveActionsConst.SHOW_PASSWORD
  }),
  showConfirmPassword: () => ({
    type: collectiveActionsConst.SHOW_CONFIRM_PASSWORD
  })
}
