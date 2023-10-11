class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :car_id, :user_id
  
end
