import React, { Component } from 'react';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        {this.props.rating} <br />
        {this.props.body}<br />
        {this.props.user}<br />
        {this.props.created_at}<br /> <br /> <br />
        <a className="button" href={`/reviews/${this.props.id}/edit`}> Edit Review </a>
        <input className="button" type="button" value="Delete" onClick = {this.props.handleDelete} />
      </div>
     )

  }
}

export default ReviewTile
