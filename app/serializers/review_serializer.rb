class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :car_id, :user_id, :username

  def username
    object.user.username
  end
  
end
