class ReviewsController < ApplicationController


    def create
        review = @user.reviews.create!(review_params)
        render json: review, status: :created
    end 

    def update
        review = find_reviews
        if review
            review.update(review_params)
            render json: review, status: :ok
        else
            render json: { error: "Review Not Found" }, status: :not_found
        end
    end


    private

    def review_params
        params.permit(:body, :car_id, :username)
    end

    def find_reviews
        @user.reviews.find_by(id: params[:id])
    end

end
