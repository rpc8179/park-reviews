import React from 'react';

const ReviewTile = (props) => {
  return(

    <div>
      {props.rating} <br />
      {props.body}<br />
      {props.user}<br />
      {props.created_at}<br /> <br /> <br />
    </div>
  )
}


export default ReviewTile
