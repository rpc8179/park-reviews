class Review < ApplicationRecord
  validates :rating, numericality: { minimum: 0, maximuim: 5}

  belongs_to :user
  belongs_to :park
end
