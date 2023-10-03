class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :cars_reviewed


  def cars_reviewed
    self.object.cars.uniq.map do |car|
      "#{car.year} #{car.make} #{car.model}"
    end
  end

end
