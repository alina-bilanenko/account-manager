const usersListConst = {
  LIST_OF_USER: 'LIST_OF_USER'
}

export const usersList = {
  listOfUsers: value => ({
    type: usersListConst.LIST_OF_USER,
    users: value
  })
}
