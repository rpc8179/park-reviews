import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ParkContainer from './ParkContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/parks'>
          <Route path='/parks/:id' component={ParkContainer} />
        </Route>
      </Router>
    </div>
  )
}

export default App
