class CarsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def create
        new_car = Car.create!(car_params)
        render json: new_car, include: [:reviews], status: :ok
    end

    def index
        cars = Car.all
        render json: cars, include: [:reviews], status: :ok
    end

    def show
        car = Car.find_by( car_params )
        render json: car, include: [:reviews], status: :ok
    end

    private

    def car_params
        params.permit(:year, :make, :model, :image, :reviews)
    end

end
