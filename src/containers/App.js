import React from "react";
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import MainContainer from 'containers/MainContainer'

const App = ({history, store}) => (
      <ConnectedRouter history={history}>
        <Switch>
                <Route component={MainContainer} />
        </Switch>
      </ConnectedRouter>
);

export default App;
