const createUserConst = {
  ADD_NEW_USER: 'ADD_NEW_USER'
};

export const createUser = {
  addNewUser: value => ({
    type: createUserConst.ADD_NEW_USER,
    user: value
  })
};
