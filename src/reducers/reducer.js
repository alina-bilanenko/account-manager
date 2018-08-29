import { combineReducers } from 'redux'
import { usersList } from 'reducers/listOfUserReducer'
import { reducer as formReducer } from 'redux-form'

const collectiveState = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return { ...state, createUser: !state.createUser }
    case 'SHOW_PASSWORD':
      return { ...state, showPassword: !state.showPassword }
    case 'SHOW_CONFIRM_PASSWORD':
      return { ...state, showConfirmPassword: !state.showConfirmPassword }

    default:
      return state
  }
}

export const reducer = combineReducers({
  usersList,
  collectiveState,
  form: formReducer
})
