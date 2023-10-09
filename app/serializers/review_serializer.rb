class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :body, :car_id, :user_id

  
end
