class ReviewsController < ApplicationController


    def create
        review = @user.reviews.create!(review_params)
        render json: review, status: :created
    end 


    private

    def review_params
        params.permit(:body, :car_id)
    end

end
