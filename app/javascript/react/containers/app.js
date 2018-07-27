import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import ParkFormContainer from './ParkFormContainer'
import ParkShowContainer from './ParkShowContainer'
import ParkContainer from './ParkContainer'

import ReviewsFormContainer from './ReviewsFormContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
            <Route path='/parks' />
            <Route path='/parks/new' component={ParkFormContainer} />
            <Route path='/parks/:id'>
              <IndexRoute component={ParkContainer}/>
              <Route path='/parks/:id/reviews/new' component={ReviewsFormContainer}/>
            </Route>
        </Route>
      </Router>
    </div>
  )
}

export default App
