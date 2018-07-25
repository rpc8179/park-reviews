class Api::V1::ReviewsController < ApplicationController
  def index
    reviews = Park.find(params[:park_id]).reviews

    reviews_users = reviews.map do |review|
      review.user.email
    end

    formatted_reviews = []
    reviews.each_with_index do |val, index|
      formatted_reviews.push(
        {
          review_data: val,
          user_data: reviews_users[index]
        }
      )
    end

    render json: {
      formatted_reviews: formatted_reviews
    }
  end
end
