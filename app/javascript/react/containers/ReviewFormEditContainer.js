import React, { Component } from 'react'
import TextField from '../components/TextField'
import RatingSelectField from '../components/RatingSelectField'
import { browserHistory } from 'react-router'

class ReviewFormEditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      rating: '',
      review_id: this.props.params.id,
      errors: [],
      updatedReview: {}
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleFieldChange = (event) => {
    let newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleClear = (event) => {
    event.preventDefault();
    let newState = this.state
    newState.body = ''
    newState.rating = ''
    this.setState({ newState })
  }

  handleUpdate = (event) => {
    event.preventDefault();
    let formPayload = this.state
    fetch(`/api/v1/reviews/${this.state.review_id}`,
      {
        method: "PATCH",
        body: JSON.stringify(formPayload),
        credentials: 'same-origin',
        headers: { "Content-Type": 'application/json' }
      }
    )
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
      this.setState({
        errors: response.errors,
        updatedReview: {rating: this.state.rating, body: this.state.body}
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  componentDidMount() {
    fetch(`/api/v1/reviews/${this.state.review_id}`)
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
    .then(body => {
      this.setState({
        body: body.review.body,
        rating: body.review.rating
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleUpdate}>
          <TextField
            label='body'
            name='body'
            value={this.state.body}
            handleChange={this.handleFieldChange}
          />
          <RatingSelectField
            label='rating'
            name='rating'
            value={this.state.rating}
            handleChange={this.handleFieldChange}
          />
          <div className="button-group">
            <button className="button" onClick={this.handleClear}>Clear</button>
            <input className="button" type="submit" value="Update" />

          </div>
        </form>
      </div>
    )
  }
}

export default ReviewFormEditContainer
