class Api::V1::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
      render json: {parks: Park.all }
  end

  def show
      render json: { park: Park.find(params[:id])}
  end

  def create
    park = Park.new(name: params["name"], address: params["address"], city: params["city"], state: params["state"], zip: params["zip"], description: params["description"])
    if park.save
        render json: { park: park, errors: [], successStatus: "Submitted Successfully!"}
    else
        render json: { park: {}, errors: park.errors.full_messages, successStatus: "" }
    end
  end

  def edit
  end

  def update
    park = Park.find(params[:id])
    if park.update(park_params)
      render json: {park: park, errors: ''}
    else
      render json: {errors: park.errors}, status: 422
    end
  end

  private

  def park_params
    params.require(:park).permit(:name, :address, :city, :state, :zip, :description)
  end
end
