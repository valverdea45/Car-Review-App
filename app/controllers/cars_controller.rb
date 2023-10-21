class CarsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def create
        new_car = Car.create!(car_params)
        render json: new_car, status: :ok
    end

    def index
        cars = Car.all
        render json: cars, status: :ok
    end

    def show
        car = Car.find_by( car_params )
        render json: car, status: :ok
    end

    private

    def car_params
        params.permit(:year, :make, :model, :image, :reviews, :created_by)
    end

end
