import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import MainContainer from 'containers/MainContainer'
import PropTypes from 'prop-types'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route component={MainContainer} />
    </Switch>
  </ConnectedRouter>
)

App.propTypes = {
  history: PropTypes.object
}
export default App
