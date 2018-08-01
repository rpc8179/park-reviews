import React, { Component } from 'react'
import ReviewTile from '../components/ReviewTile'


class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    // this.deleteReview = this.deleteReview.bind(this)
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
      this.setState({
        reviews: response.formatted_reviews
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let reviews = this.state.reviews.map((review) => {
      return(
        <div>
        <ReviewTile
          key={review.review_data.id}
          id={review.review_data.id}
          user={review.user_data}
          rating={review.review_data.rating}
          body={review.review_data.body}
          created_at={review.review_data.created_at}
        />
        </div>
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
