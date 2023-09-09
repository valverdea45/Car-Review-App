class User < ApplicationRecord

    has_many :reviews
    has_many :cars, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true

    validates :password, length: { minimum: 5 }


end
