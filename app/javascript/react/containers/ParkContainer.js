import React from 'react'
import ParkShowContainer from './ParkShowContainer'
import ReviewsContainer from './ReviewsContainer'

const ParkContainer = (props) => {

  return(
    <div>
      <ParkShowContainer
        params={{id: props.params.id}}
      />
      <ReviewsContainer
        park_id={props.params.id}
      />
    <button className="button">Destroy Park</button>
    </div>
  )
}

export default ParkContainer
