class ReviewUpvote < ApplicationRecord
  belongs_to :user
  belongs_to :review
  validates :value,
    presence: true,
    numericality: {less_than_or_equal_to: 1, greater_than_or_equal_to: -1 }
  validates :user, uniqueness: { scope: :review}
end
