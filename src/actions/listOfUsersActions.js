import db from 'db'
import { fieldNames } from 'consts'
import moment from 'moment'

const usersConst = {
  LOAD_USERS: 'LOAD_USERS',
  ADD_USERS: 'ADD_USERS',
  UPDATE_USERS: 'UPDATE_USERS',
  DELETE_USERS: 'DELETE_USERS'
}

export function loadUsers () {
  return async (dispatch) => {
    const users = await db.table('users').toArray()
    dispatch({
      type: usersConst.LOAD_USERS,
      payload: users
    })
  }
}

export function addUsers (value) {
  return async (dispatch) => {
    const user = { ...value,
      [fieldNames.birthDate]:
        value[fieldNames.birthDate]
          ? value[fieldNames.birthDate].format('MM/DD/YYYY').toString()
          : value[fieldNames.birthDate],
      [fieldNames.lastUpdate]: moment().format('MM/DD/YYYY').toString()
    }
    const id = await db.table('users').add(user)
    dispatch({
      type: usersConst.ADD_USERS,
      payload: { ...value, id }
    })
  }
}

export function deleteUsers(id) {

  return async  (dispatch) => {
    const idDelete = await db.table('users').delete(id);
    dispatch({
      type: usersConst.DELETE_USERS,
      id: id,
    });
  }
}
//
// export function updateUsers(id, done) {
//   return async  (dispatch) => {
//     const users = await db.table('users').update(id, { done });
//     dispatch({
//       type: usersConst.UPDATE_USERS,
//       payload: { id, done },
//     });
//   }
// }
