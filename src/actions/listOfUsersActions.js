import db from 'db/db'
import { fieldNames } from 'utils/consts'
import moment from 'moment'
import { initialValueForm } from 'utils/functions'

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

export function loadUsers (value, page, rowsPerPage) {
  const newPage = page || 1
  const newRowsPerPage = rowsPerPage || 5

  return async (dispatch) => {
    let users = []
    let count = 0

    if (!value) {
      count = await db.table('users').count()
      users = await db.table('users')
        .offset((newPage - 1) * newRowsPerPage)
        .limit(newRowsPerPage)
        .toArray()
    } else if (value) {
      if (!page) {
        dispatch({
          type: 'PAGE',
          page: 1
        })
      }

      if (!rowsPerPage) {
        dispatch({
          type: 'ROWS_PER_PAGE',
          rowsPerPage: 5
        })
      }

      const filterUsers = await db.table('users')
        .filter(function (user) {
          return user[fieldNames.firstName].indexOf(value) !== -1 ||
            user[fieldNames.lastName].indexOf(value) !== -1
        })

      count = await filterUsers.count()
      users = await filterUsers
        .offset((newPage - 1) * newRowsPerPage)
        .limit(newRowsPerPage)
        .toArray()
    }

    dispatch({
      type: 'COUNT',
      count: count
    })

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

export function editingUser (id, complete = false) {
  return async (dispatch) => {
    if (!id) {
      const userLocalStorage = await JSON.parse(localStorage.getItem('form'))
      if (!userLocalStorage) return
      dispatch({
        type: 'HAS_UNSAVED_DATA',
        hasUnsavedData: true
      })
      if (complete) {
        initialValueForm(userLocalStorage, dispatch)
        dispatch({
          type: 'HAS_UNSAVED_DATA',
          hasUnsavedData: false
        })
      }
    }
    const user = id
      ? await db.table('users').get({ id: parseInt(id, 10) }) || {}
      : {}
    dispatch({
      type: usersConst.EDITING_USER,
      user: user
    })
    initialValueForm(user, dispatch)

  }
}
