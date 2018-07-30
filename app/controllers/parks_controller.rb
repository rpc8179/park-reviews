class ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
      @parks = Park.all
  end

  def show
    puts "DID WE GET HERE!?"
    @park = Park.find(params[:id])
  end

  def edit
    @park = Park.find(params[:id])

  end

  def update
    redirect_to "/parks/1"
  end

  def destroy
    @park = Park.find(params[:id])
    @park.destroy
    redirect_to parks_path
  end
end
