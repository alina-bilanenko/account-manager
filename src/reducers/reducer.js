import { combineReducers } from 'redux'
import { usersList } from 'reducers/listOfUserReducer'
import { reducer as formReducer } from 'redux-form'
import { pagination } from 'reducers/pagination'
import { cropState } from 'reducers/crop'

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
    case 'FILTER':
      return { ...state, filter: action.filter }

    default:
      return state
  }
}

export const reducer = combineReducers({
  usersList,
  collectiveState,
  pagination,
  cropState,
  form: formReducer
})
