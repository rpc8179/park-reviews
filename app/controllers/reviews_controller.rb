class ReviewsController < ApplicationController
  before_action :authorize_admin, only: [:destroy]
  def new
  end

  def edit
    @review = Review.find(params[:id])
  end

  def destroy

  end
  private
  def authorize_user
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You Do not have access to this page"
      redirect_to parks_path
    end
  end
  def authorize_admin
    if !current_user.admin?
      flash[:notice] = "You Do not have access to this page"
      redirect_to parks_path
    end
  end
end
