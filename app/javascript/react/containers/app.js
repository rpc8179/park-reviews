import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ParkShowContainer from './ParkShowContainer'
import ParkFormContainer from './ParkFormContainer'


const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
            <Route path='/parks' />
            <Route path='/parks/new' component={ParkFormContainer} />
            <Route path='/parks/:id' component={ParkShowContainer} />
        </Route>
      </Router>
    </div>
  )
}

export default App
