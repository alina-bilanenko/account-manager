import { tabList, fieldNames } from 'utils/consts'
import { initialize } from 'redux-form'
import moment from 'moment'

export function saveInLocalStorage (value, dispatch, props) {
  if (!props.isCreateUser) return
  let localStorageState = JSON.parse(localStorage.getItem('form')) || {}

  const newState = { ...localStorageState, ...value }

  localStorage.setItem('form', JSON.stringify(newState))
}

export function initialValueForm (user, dispatch) {
  tabList.forEach(item => {
    dispatch(initialize(item.name, {
      ...user,
      [fieldNames.birthDate]:
        user[fieldNames.birthDate]
          ? moment(user[fieldNames.birthDate])
          : user[fieldNames.birthDate],
      [fieldNames.phone]:
        user[fieldNames.phone]
          ? user[fieldNames.phone]
          : ['', '']
    }))
  })
}

export function generate () {
  let i = 0
  let users = []
  while (i < 25) {
    users.push({
      userName: `userName ${i}`,
      password: `password ${i}`,
      repeatPassword: `password ${i}`,
      firstName: `firstName ${i}`,
      lastName: `lastName ${i}`,
      email: `email${i}@email.com`,
      gender: 'male',
      company: `company ${i}`,
      mainLanguage: {value: "en", label: "English"},
      skills: [
        {label: "HTML", value: "HTML"},
        {label: "CSS", value: "CSS"},
        {label: "Javascript", value: "Javascript"}
      ],
      lastUpdate: moment()
    })
    i++
  }
  return users
}
