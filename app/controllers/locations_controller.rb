class LocationsController < ApplicationController
  def create
    @location = Location.create!(location_params)
    render json: @location
  end 
  
  def show
    @location = Location.find(params[:id])
    render json: @location
  end
  
  def update
    @location = Location.find(params[:id)
    @location.update(location_params)
    render json: @location
  end
  
  def destroy
    @location = Location.find(params[:id])
    @location.destroy!
  end
  
  private
  
  def location_params
    params.require(:location).permit(:lat, :long, :trip_id)
  end
end
