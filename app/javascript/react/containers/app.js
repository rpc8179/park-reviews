import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import ParkFormContainer from './ParkFormContainer'
import ParkShowContainer from './ParkShowContainer'
import ParkContainer from './ParkContainer'
import ParkFormEditContainer from './ParkFormEditContainer'
import ReviewFormEditContainer from './ReviewFormEditContainer'
import ReviewsFormContainer from './ReviewsFormContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <Route path='/parks' />
          <Route path='/parks/new' component={ParkFormContainer} />
          <Route path='/parks/:id/edit' component={ParkFormEditContainer} />
          <Route path='/parks/:id'>
          <IndexRoute component={ParkContainer}/>
          <Route path='/parks/:id/reviews/new' component={ReviewsFormContainer}/>
          </Route>
          <Route path='/reviews/:id/edit' component={ReviewFormEditContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App
