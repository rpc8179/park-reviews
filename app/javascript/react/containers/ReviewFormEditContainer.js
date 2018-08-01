import React, { Component } from 'react'
import TextField from '../components/TextField'
import RatingSelectField from '../components/RatingSelectField'
import { browserHistory } from 'react-router'

<<<<<<< HEAD
class ReviewFormEditContainer extends Component {
=======
class ReviewsFormContainer extends Component {
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      rating: '',
<<<<<<< HEAD
      review_id: props.params.id,
      errors: [],
      updatedReview: {}
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
=======
      park_id: props.params.id,
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
  }

  handleFieldChange = (event) => {
    let newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

<<<<<<< HEAD

=======
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
  handleClear = (event) => {
    event.preventDefault();
    let newState = this.state
    newState.body = ''
    newState.rating = ''
    this.setState({ newState })
  }

<<<<<<< HEAD
  handleUpdate = (event) => {
    event.preventDefault();
    let formPayload = this.state
    fetch(`/api/v1/reviews/${this.state.review_id}`,
      {
        method: "PATCH",
=======
  handleSubmit = (event) => {
    event.preventDefault();
    let formPayload = this.state
    fetch(`/api/v1/parks/${this.state.park_id}/reviews.json`,
      {
        method: "POST",
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
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
<<<<<<< HEAD
      this.setState({
        errors: response.errors,
        updatedReview: {rating: this.state.rating, body: this.state.body}
      })

      browserHistory.push(`/parks`)
=======
      this.setState({errors: response.errors})
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

<<<<<<< HEAD
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
      console.log(body)
        this.setState({
          body: body.review.body,
          rating: body.review.rating
          // errors: body.review.errors
        })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render() {
    // let errors = this.state.errors.map(error => {
    //   if(error === "User must exist") {
    //     error = "You need to be logged in to do this"
    //   }
    //   return(
    //     <div key={error}>
    //       {error}
    //       <br></br>
    //     </div>
    //   )
    // })
    return(
      <div>
        <form onSubmit={this.handleUpdate}>
=======



  render() {
    let errors = this.state.errors.map(error => {
      if(error === "User must exist") {
        error = "You need to be logged in to do this"
      }
      return(
        <div key={error}>
          {error}
          <br></br>
        </div>
      )
    })
    return(
      <div>
        {errors}
        <form onSubmit={this.handleSubmit}>
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
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
<<<<<<< HEAD
            <input className="button" type="submit" value="Update" />
=======
            <input className="button" type="submit" value="Submit" />
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
          </div>
        </form>
      </div>
    )
  }
}

<<<<<<< HEAD
export default ReviewFormEditContainer
=======
export default ReviewsFormContainer
>>>>>>> 75d157658d475365e55fbbc9a9720069f9f4a4a5
