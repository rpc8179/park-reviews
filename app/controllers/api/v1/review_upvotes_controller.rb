class Api::V1::ReviewUpvotesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def create
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

    votes = Review.find(review_upvotes_params[:review_id]).review_upvotes
    upvote_total = 0
    downvote_total = 0
    votes.each do |vote|
      if vote.value === 1
        upvote_total += 1
      elsif vote.value === -1
        downvote_total += 1
      end
    end

    render json: {
      upvote_total: upvote_total,
      downvote_total: downvote_total
    }
  end

  private
  def review_upvotes_params
    output = params.require(:review_upvote).permit(:review_id, :value)
    output[:user] = current_user
    output
  end
end
