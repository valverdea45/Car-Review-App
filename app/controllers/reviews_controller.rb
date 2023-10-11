class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :review_not_found_response


    def create
        review = @user.reviews.create!(review_params)
        render json: review, status: :created
    end 

    def update
        review = find_review
        review.update(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = find_review
        review.destroy
        render json: review, status: :ok
    end


    private

    def review_params
        params.permit(:body, :car_id)
    end

    def find_review
        @user.reviews.find_by!(id: params[:id])
    end

    def review_not_found_response
        render json: { error: "Not Found" }, status: :not_found
    end

end
