class ReviewsController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def create
        review = Review.create!(review_params)
        render json: review, status: :ok
    end 


    private

    def review_params
        params.permit(:user_id, :car_id, :body)
    end

end
