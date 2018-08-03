require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_park) {
    Park.create!(
      name: "Boston Common",
      address: "167 Tremont Street",
      city: "Boston",
      state: "MA",
      zip: "02134",
      description: "Has a great grass field and lots of people yelling and running around."
    )
  }
  let!(:first_user) {
    User.create!(
      email: 'spaceman@user.user',
      password: 'bbbbbb'
    )
  }

  let!(:first_review) {
    Review.create!(
      rating: 4,
      body: "SCRUMHMUURCRSCM, excuse me. It was great.",
      park: first_park,
      user: first_user
    )
  }

  let!(:second_review) {
    Review.new(
      rating: 4,
      body: "Hi world",
      park: first_park,
      user: first_user
    )
  }

  describe "GET#show" do
    it "should return reviews of a park" do
      get :index, params: {park_id: first_park.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 2
      expect(returned_json["formatted_reviews"][0]["review_data"]["user_id"]).to eq first_user.id
      expect(returned_json["formatted_reviews"][0]["review_data"]["park_id"]).to eq first_park.id
      expect(returned_json["formatted_reviews"][0]["review_data"]["rating"]).to eq first_review.rating
      expect(returned_json["formatted_reviews"][0]["review_data"]["body"]).to eq first_review.body
      expect(returned_json["formatted_reviews"][0]["user_data"]).to eq first_user.email
    end
  end

  describe "POST#create" do
    it 'creates a new review' do
      numReviewsBefore = Review.all.length
      get :create, params: {
        review: {
          rating: second_review.rating,
          body: second_review.body,
          park: second_review.park,
          user: second_review.user
        }
      }
      second_review.save

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      numReviewsAfter = Review.all.length
      expect(numReviewsBefore + 1).to eq numReviewsAfter
    end
  end
end
