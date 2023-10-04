class Car < ApplicationRecord

    has_many :reviews
    has_many :users, through: :reviews

    validates :year, presence: true
    validates :make, presence: true
    validates :model, presence: true

    # make a custome validation for comparing makes against a list 
    # practice making by jumping into a rails console

end
