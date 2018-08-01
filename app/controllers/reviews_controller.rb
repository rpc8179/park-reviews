class ReviewsController < ApplicationController
  def new
  end

  def edit
    @review = Review.find(params[:park_id])
  end
end
