import AddingNewUsers from 'components/addingNewUser/AddingNewUsers'
import ListOfAllUsers from 'components/listOfUsers/ListOfAllUsers'
import UserView from 'components/listOfUsers/UserView'

const routes = [
  {
    exact: true,
    path: '/create-user/:name',
    component: AddingNewUsers
  },
  {
    exact: true,
    path: '/list-of-user',
    component: ListOfAllUsers
  },
  {
    exact: true,
    path: '/user/:id',
    component: UserView
  },
  {
    exact: true,
    path: '/edit-user/:id',
    component: AddingNewUsers
  },
  {
    component: AddingNewUsers
  }
]

export default routes
