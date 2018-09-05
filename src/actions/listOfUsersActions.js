import db from 'db'
import { fieldNames, tabList } from 'consts'
import moment from 'moment'
import { initialize } from 'redux-form'

function returnWithDateRight (value) {
  return { ...value,
    [fieldNames.birthDate]:
      value[fieldNames.birthDate]
        ? value[fieldNames.birthDate].toISOString()
        : value[fieldNames.birthDate],
    [fieldNames.lastUpdate]: moment().toISOString()
  }
}

const usersConst = {
  LOAD_USERS: 'LOAD_USERS',
  ADD_USERS: 'ADD_USERS',
  UPDATE_USERS: 'UPDATE_USERS',
  DELETE_USERS: 'DELETE_USERS',
  EDITING_USER: 'EDITING_USER'
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
    const user = returnWithDateRight(value)
    const id = await db.table('users').add(user)
    dispatch({
      type: usersConst.ADD_USERS,
      payload: { ...value, id }
    })
  }
}

export function deleteUsers (id) {
  return async (dispatch) => {
    await db.table('users').delete(id)
    dispatch({
      type: usersConst.DELETE_USERS,
      id: id
    })
  }
}

export function updateUsers (id, data) {
  return async (dispatch) => {
    const user = returnWithDateRight(data)
    await db.table('users').update(id, user)
    dispatch({
      type: usersConst.UPDATE_USERS,
      payload: { id, user }
    })
  }
}

export function editingUser (id) {
  return async (dispatch) => {
    const user = id ? await db.table('users').get({ id: parseInt(id, 10) }) : {}
    dispatch({
      type: usersConst.EDITING_USER,
      user: user
    })
    if (!user) return
    tabList.forEach(item => {
      dispatch(initialize(item.name, { ...user,
        birthDate:
            user.birthDate
              ? moment(user.birthDate)
              : user.birthDate
      }))
    }
    )
  }
}
