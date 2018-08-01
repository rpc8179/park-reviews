import React, { Component } from 'react'
import TextField from '../components/TextField'
import RatingSelectField from '../components/RatingSelectField'
import { browserHistory } from 'react-router'

class ReviewsFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      rating: '',
      park_id: props.params.id,
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit = (event) => {
    event.preventDefault();
    let formPayload = this.state
    fetch(`/api/v1/parks/${this.state.park_id}/reviews.json`,
      {
        method: "POST",
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
      this.setState({errors: response.errors})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let errors = this.state.errors.map(error => {
      if(error === "User must exist") {
        error = "You need to be logged in to do this"
      }
      return(
        <div key={error}>
          {error}
          <br />
        </div>
      )
    })
    return(
      <div>
        {errors}
        <form onSubmit={this.handleSubmit}>
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
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewsFormContainer
