class ParksController < ApplicationController
  before_action :authorize_user, except: [:index, :show, :new, :edit, :create]
  before_action :authorize_admin, except: [:index, :show, :edit, :new, :create, :destroy]
  def index
    @parks = Park.all
  end

  def show
    @park = Park.find(params[:id])
  end

  def edit
    @park = Park.find(params[:id])
  end

  def update

  end

  def destroy
    @park = Park.find(params[:id])
    @park.destroy
    redirect_to parks_path
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
