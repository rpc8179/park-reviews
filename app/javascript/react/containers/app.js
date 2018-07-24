import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ParkShowContainer from './ParkShowContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/parks'>
          <Route path='/parks/:id' component={ParkShowContainer} />
        </Route>
      </Router>
    </div>
  )
}

export default App
