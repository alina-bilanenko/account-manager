import { combineReducers } from 'redux'
import { createUser } from 'reducers/createUserReducer'
import { usersList } from 'reducers/listOfUserReducer'
import { reducer as formReducer } from 'redux-form'

const collectiveState = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return { ...state, createUser: !state.createUser };

    default:
      return state
  }
};

export const reducer = combineReducers({
  createUser,
  usersList,
  collectiveState,
  form: formReducer
});