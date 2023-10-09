class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :cars_reviewed

  has_many :reviews

  def cars_reviewed
    self.object.cars.uniq.map do |car|
      "#{car.year} #{car.make} #{car.model}"
    end

  end

end
