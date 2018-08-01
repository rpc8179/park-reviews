import React from 'react';
// import React, { Component } from 'react'

const ReviewTile = (props) => {
  return(

    <div>
      {props.rating} <br />
      {props.body}<br />
      {props.user}<br />
      {props.created_at}<br /> <br /> <br />
      <a href={`/reviews/${props.id}/edit`}> Edit Review </a>
    </div>
  )
}


export default ReviewTile
