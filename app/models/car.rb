class Car < ApplicationRecord

    has_many :reviews
    has_many :users, through: :reviews

    validates :year, presence: true
    validates :make, presence: true
    validates :model, presence: true

end
