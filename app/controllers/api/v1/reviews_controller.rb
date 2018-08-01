class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  # before_action :authorize_admin, only: [:destroy]

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

    render json: { formatted_reviews: formatted_reviews, formatted_user: current_user }
  end

  def show
    render json: { review: Review.find(params[:id]), formatted_user: current_user }
    binding.pry
  end

  def create
    review = Review.new(review_params)
    review.user = current_user
    if review.save
      render json: { review: review, errors: [] }
    else
      render json: { review: {}, errors: review.errors.full_messages }
    end
  end

  def edit
    binding.pry
    render json: { review: Review.find(params[:id]), errors: ''  }
  end

  def update
    review = Review.find(params[:id])
    if review.update(review_params)
      render json: {review: review}

    else
      render json: {errors: review.errors}, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:park_id, :rating, :body)
  end

  def authorize_admin
    if !current_user.admin?
      flash[:notice] = "You Do not have access to this page"
      redirect_to parks_path
    end
  end
end
