class CreateReviewUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :review_upvotes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :review, null: false
      t.integer :value, null: false
    end
  end
end
