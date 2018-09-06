import { tabList } from './consts'
import { initialize } from 'redux-form'
import moment from 'moment'

export function saveInLocalStorage (value, dispatch, props) {
  if (!props.isCreateUser) return
  let localStorageState = localStorage.getItem('form')

  if (!localStorageState) {
    localStorageState = {}
  } else {
    localStorageState = JSON.parse(localStorageState)
  }

  const newState = { ...localStorageState, ...value }

  localStorage.setItem('form', JSON.stringify(newState))
}

export function initialValueForm (user, dispatch) {
  tabList.forEach(item => {
    dispatch(initialize(item.name, {
      ...user,
      birthDate:
        user.birthDate
          ? moment(user.birthDate)
          : user.birthDate
    }))
  })
}
