import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upvote_total: this.props.upvote_total,
      downvote_total: this.props.downvote_total,
      errors: []
    }
    this.handleVoteClick = this.handleVoteClick.bind(this)
    this.handleUpvoteClick = this.handleUpvoteClick.bind(this)
    this.handleDownvoteClick = this.handleDownvoteClick.bind(this)
  }

  handleVoteClick(event, value) {
    let formPayload = {
      review_id: event.target.value,
      value: value,
    }
    fetch(`/api/v1/review_upvotes.json`,
    {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      if (response.errors.length != 0) {
        this.setState({errors: response.errors})
      } else {
        this.setState(response)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleUpvoteClick(event) {
    this.handleVoteClick(event, 1)
  }

  handleDownvoteClick(event) {
    this.handleVoteClick(event, -1)
  }

  render() {
    return(
      <div className='review-tile'>
        {this.props.rating} <br />
        {this.props.body}<br />
        {this.props.user}<br />
        {this.props.created_at}<br />
        <div className='votes-area'>
          Upvotes: {this.state.upvote_total}
          <button
            onClick={this.handleUpvoteClick}
            value={this.props.id}
          >
            /\
          </button>
          Downvotes: {this.state.downvote_total}
          <button
            onClick={this.handleDownvoteClick}
            value={this.props.id}
          >
            \/
          </button>
          <div>{this.state.errors}</div>
        </div>
        <a href={`/reviews/${this.props.id}/edit`}> Edit Review </a>
      </div>
    )
  }
}

export default ReviewTile
