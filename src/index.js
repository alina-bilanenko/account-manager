import React from 'react'
import { render } from 'react-dom'
import 'react-datepicker/dist/react-datepicker.css'
import 'index.css'
import App from 'containers/App'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from 'reducers/reducer'
import { Provider } from 'react-redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { initialState } from 'consts'
import { createBrowserHistory } from 'history'
import {loadUsers} from "actions/listOfUsersActions";
import thunk from 'redux-thunk';

const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
)

store.dispatch(loadUsers);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
