import React, { Component } from 'react'
import ReviewTile from '../components/ReviewTile'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      current_user: {}
    }
  }
  componentDidMount() {
    fetch(`/api/v1/parks/${this.props.park_id}/reviews`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      if (response.formatted_user != null) {
        this.setState({
          reviews: response.formatted_reviews,
          current_user: response.formatted_user
        })
    } else {
        this.setState({
          reviews: response.formatted_reviews
        })
    }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let reviews = this.state.reviews.map((review) => {
        console.log(review)
      return(
        <ReviewTile
          key={review.review_data.id}
          id={review.review_data.id}
          user={review.user_data}
          user_id={review.review_data.user_id}
          rating={review.review_data.rating}
          body={review.review_data.body}
          created_at={review.review_data.created_at}
          current_user={this.state.current_user}
        />
      )
    })


    return(
      <div>
        {reviews}
      </div>
    )
  }
}

export default ReviewsContainer
