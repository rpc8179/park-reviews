require 'rails_helper'

feature "visitor sees park details" do
  scenario "sees park details" do
    national_park = Park.create(name: 'National Park', address: '1 Dreary Lane', city: 'Muffin City', state: 'NJ', zip: '12345', description: 'Do you know the muffin man? The muffin man? THE MUFFIN MAN!')

    visit park_path(Park.last)

    expect(page).to have_content national_park.name
    expect(page).to have_content national_park.address
    expect(page).to have_content national_park.city
    expect(page).to have_content national_park.state
    expect(page).to have_content national_park.zip
    expect(page).to have_content national_park.description
  end
end
