class Api::V1::ParksController < ApplicationController
  def show
    render json: { park: Park.find(params[:id]) }
  end
end
