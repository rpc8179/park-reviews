import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import ParkFormContainer from './ParkFormContainer'
import ParkShowContainer from './ParkShowContainer'
import ParkContainer from './ParkContainer'


const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
            <Route path='/parks' />
            <Route path='/parks/new' component={ParkFormContainer} />
            <Route path='/parks/:id' component={ParkContainer} />
        </Route>
      </Router>
    </div>
  )
}

export default App
