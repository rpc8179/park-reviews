
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
            flash[:notice] = "Park added successfully!"
            render json: { park: park, error: []}
            # react router push for redirect
        else
            render json: { park: {}, error: park.errors.full_messages }


            # @failure = park.errors.full_messages.to_sentence
        end
    end
end
