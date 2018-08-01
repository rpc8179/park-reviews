class ReviewsController < ApplicationController
  def new
  end

  def edit
    @review = Review.find(params[:id])
  end

  def destroy
    binding.pry    
  end
end
