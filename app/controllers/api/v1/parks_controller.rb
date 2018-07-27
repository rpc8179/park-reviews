
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
            render json: { park: park, error: [], works: "Submitted Successfully!"}
        else
            render json: { park: {}, error: park.errors.full_messages, works: "" }


            # @failure = park.errors.full_messages.to_sentence
        end
    end
end
