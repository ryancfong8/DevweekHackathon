class TripsController < ApplicationController
  def index
    render json: Trip.all
  end
  
  def new
    render json: Trip.new
  end
  
  def show
    @trip = Trip.find(params[:id])
    render json: @trip
  end
  
  def update
    @trip = Trip.find(params[:id])
<<<<<<< Updated upstream
    @trip.update(params)
=======
    @trip.update(trip_params)
>>>>>>> Stashed changes
    
    render json: @trip
  end
  
  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
    return
  end
  
  private
  
  def trip_params
<<<<<<< Updated upstream
    params.require(:article).permit(:id, :name, :start_date, :start_time, :end_date, :end_time, 
=======
    params.require(:trip).permit(:name, :start_date, :start_time, :end_date, :end_time, 
>>>>>>> Stashed changes
      :itinerary, :transportation, :drop_off_location_long, :drop_off_location_lat, 
      :pick_up_location_long, :pick_up_location_lat
    )
  end
end
