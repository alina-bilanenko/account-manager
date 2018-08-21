const collectiveActionsConst = {
  CREATE_USER: 'CREATE_USER'
};

export const collectiveActions = {
  createUser: () => ({
    type: collectiveActionsConst.CREATE_USER
  })
};
