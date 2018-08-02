class Api::V1::ReviewUpvotesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def create
    if current_user.nil?
      render json: {errors: "You need to be logged in to vote!"}
    else
      review_upvote = ReviewUpvote.find_by(
        user_id: review_upvotes_params[:user][:id],
        review_id: review_upvotes_params[:review_id]
      )
      if review_upvote && review_upvote[:value] == review_upvotes_params[:value]
        review_upvote[:value] = 0
        review_upvote.save
      elsif review_upvote
        review_upvote[:value] = review_upvotes_params[:value]
        review_upvote.save
      else
        ReviewUpvote.create!(
          user: review_upvotes_params[:user],
          review_id: review_upvotes_params[:review_id],
          value: review_upvotes_params[:value]
        )
      end
      render json: {
        upvote_total: Review.find(review_upvotes_params[:review_id]).upvote_total,
        downvote_total: Review.find(review_upvotes_params[:review_id]).downvote_total,
        errors: []
      }
    end
  end

  private

  def review_upvotes_params
    output = params.require(:review_upvote).permit(:review_id, :value)
    output[:user] = current_user
    output
  end
end
