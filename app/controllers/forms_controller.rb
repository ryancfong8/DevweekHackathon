class FormsController < ApplicationController
  def index
    render json: Form.all
  end
  
  def create
    @form = Form.create!(form_params)
    render json: @form
  end
  
  def show
    @form = Form.find(params[:id])
    render json: @form
  end
  
  def update
    @form = Form.find(params[:id])
    @form.update!(form_params)
    render json: @form
  end
  
  def destroy
    @form = Form.find(params[:id])
    @form.destroy!
  end
  
  private
  
  def form_params
    params.require(:form).permit(:user_id, :trip_id, :signed, :form)
  end
end
