import db from 'db'
import {fieldNames} from 'consts'

const usersConst = {
  LOAD_USERS: 'LOAD_USERS',
  ADD_USERS: 'ADD_USERS',
  UPDATE_USERS: 'UPDATE_USERS',
  DELETE_USERS: 'DELETE_USERS'
};

export function loadUsers() {
  return async  (dispatch) => {
    const users = await db.table('users').toArray();
    dispatch({
      type: usersConst.LOAD_USERS,
      payload: users,
    });
  }
}

export function addUsers(value) {
  return async  (dispatch) => {
    const user = {...value, [fieldNames.birthDate]: value[fieldNames.birthDate]? value[fieldNames.birthDate].toString():value[fieldNames.birthDate]}
    const id = await db.table('users').add(user);
    dispatch({
      type: usersConst.ADD_USERS,
      payload: {...value, id }
    });
  }
}

export function deleteUsers(id) {
  return async  (dispatch) => {
    const id = await db.table('users').delete(id);
    dispatch({
      type: usersConst.DELETE_USERS,
      payload: id,
    });
  }
}

export function updateUsers(id, done) {
  return async  (dispatch) => {
    const users = await db.table('users').update(id, { done });
    dispatch({
      type: usersConst.UPDATE_USERS,
      payload: { id, done },
    });
  }
}
