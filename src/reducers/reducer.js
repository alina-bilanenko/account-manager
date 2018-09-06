import { combineReducers } from 'redux'
import { usersList } from 'reducers/listOfUserReducer'
import { reducer as formReducer } from 'redux-form'

const collectiveState = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return { ...state, createUser: action.isCreateUser }
    case 'SHOW_PASSWORD':
      return { ...state, showPassword: !state.showPassword }
    case 'SHOW_CONFIRM_PASSWORD':
      return { ...state, showConfirmPassword: !state.showConfirmPassword }
    case 'EDITING_USER':
      return { ...state, editingUser: { ...action.user } }
    case 'DELETE_USER_ID':
      return { ...state, deleteUserId: action.index }
    case 'OPEN_CONFIRMATION':
      return { ...state, openConfirmation: !state.openConfirmation }
    case 'HAS_UNSAVED_DATA':
      return { ...state, hasUnsavedData: action.hasUnsavedData }

    default:
      return state
  }
}

export const reducer = combineReducers({
  usersList,
  collectiveState,
  form: formReducer
})