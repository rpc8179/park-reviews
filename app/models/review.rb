class Review < ApplicationRecord
  validates :rating, numericality: { minimum: 0, maximuim: 5}
  validates :body, presence: true

  belongs_to :user
  belongs_to :park
  has_many :review_upvotes
end
