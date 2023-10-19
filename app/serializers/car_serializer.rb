class CarSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :image

  has_many :reviews

end
