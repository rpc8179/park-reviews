require 'rails_helper'

RSpec.describe Api::V1::ParksController, type: :controller do
  let!(:first_park) { Park.create!(
    name: "Boston Common",
    address: "167 Tremont Street",
    city: "Boston",
    state: "MA",
    zip: "02134",
    description: "Has a great grass field and lots of people yelling and running around.")
  }
  describe "GET#show" do
    it "should return the information of the park in api format." do
      get :show, params: {id: first_park.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 1
      expect(returned_json["park"]["name"]).to eq "Boston Common"
      expect(returned_json["park"]["address"]).to eq "167 Tremont Street"
      expect(returned_json["park"]["city"]).to eq "Boston"
      expect(returned_json["park"]["state"]).to eq "MA"
      expect(returned_json["park"]["zip"]).to eq "02134"
      expect(returned_json["park"]["description"]).to eq "Has a great grass field and lots of people yelling and running around."
    end
  end

  describe "POST#create" do
      it'should create a new park' do
          numParksBefore = Park.all.length
          get :create, params: {name: first_park.name, address: first_park.address, city: first_park.city, state: first_park.state, zip: first_park.zip, description: first_park.description}
          expect(response.status).to eq 200
          expect(response.content_type).to eq('application/json')
          numParksAfter = Park.all
          expect(numParksBefore + 1).to eq 2
      end
  end
end
