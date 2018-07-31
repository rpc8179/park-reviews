class ReviewsController < ApplicationController
  def new

  end

  def create

  end

  def edit
    @review = Review.find(params[:id])
  end

  def destroy
    binding.pry
    # @review = Review.find(params[:id])
    # @review.destroy
    # redirect_to parks_path
  end
end
