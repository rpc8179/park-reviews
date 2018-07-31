class Api::V1::ParksController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }
    def index
        render json: {parks: Park.all }
    end

    def show
        render json: { park: Park.find(params[:id]) }
    end

    def create
        park = Park.new(name: params["name"], address: params["address"], city: params["city"], state: params["state"], zip: params["zip"], description: params["description"])
        if park.save
<<<<<<< HEAD
            render json: { park: park, error: [], works: "Submitted Successfully!"}
        else
            render json: { park: {}, error: park.errors.full_messages, works: "" }
        end
=======
            render json: { park: park, error: [], successStatus: "Submitted Successfully!"}
        else
            render json: { park: {}, error: park.errors.full_messages, successStatus: "" }
        end
    end

    def edit
    end

    def update
      park = Park.find(params[:id])
      if park.update(park_params)
        render json: {park: park, error: ''}
      else
        render json: {error: park.errors}, status: 422
      end
    end

    private
    def park_params
      params.require(:park).permit(:name, :address, :city, :state, :zip, :description)
>>>>>>> d0d3ab06a0075f05f842f91bc32ed44418030f01
    end

end
