class Review < ApplicationRecord
    belongs_to :user
    belongs_to :car

    validates :body, presence: true
    
end
