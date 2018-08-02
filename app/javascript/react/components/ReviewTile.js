import React, { Component } from 'react';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleDelete = this.handleDelete.bind(this)

  }

    handleDelete() {
      fetch(`/api/v1/reviews/${this.props.id}`, {
        credentials: 'same-origin',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
       })
       .then(response => response.json())
       .then( response => {
         return response;
       })
       .then(location.reload(true))
     }


  render() {
    let deleteButton;
    let editButton;
    if (this.props.current_user.id == this.props.user_id) {
      editButton = <a className="button" href={`/reviews/${this.props.id}/edit`}> Edit Review </a>
      deleteButton = <input className="button" type="button" value="Delete" onClick = {this.handleDelete} />
    } else if (this.props.current_user.id == null || this.props.current_user.id != this.props.user_id) {
      deleteButton = null
      editButton = null
    }


    return(
      <div>
        {this.props.rating} <br />
        {this.props.body}<br />
        {this.props.user}<br />
        {this.props.created_at}<br /> <br /> <br />
        {editButton}
        {deleteButton}
      </div>
     )

  }
}

export default ReviewTile
