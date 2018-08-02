class Review < ApplicationRecord
  validates :rating, numericality: { minimum: 0, maximuim: 5}
  validates :body, presence: true

  belongs_to :user
  belongs_to :park
  has_many :review_upvotes

  def upvote_total
    upvote_total = 0
    self.review_upvotes.each do |vote|
      upvote_total += 1 if vote.value === 1
    end
    upvote_total
  end

  def downvote_total
    downvote_total = 0
    self.review_upvotes.each do |vote|
      downvote_total += 1 if vote.value === -1
    end
    downvote_total
  end
end
