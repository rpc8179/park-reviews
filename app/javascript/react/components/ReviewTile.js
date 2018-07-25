import React from 'react';

const ReviewTile = (props) => {
  return(

    <div>
      {props.rating}
      {props.body}
      {props.user}
      {props.created_at}
    </div>
  )
}


export default ReviewTile
