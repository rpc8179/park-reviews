require 'rails_helper'

feature "visitor sees a list of parks" do
  scenario "sees a list of parks" do
    national_park = Park.create(name: 'National Park', address: '1 Dreary Lane', city: 'Muffin City', state: 'NJ', zip: '12345', description: 'Do you know the muffin man? The muffin man? THE MUFFIN MAN!')
    international_park = Park.create(name: 'International Park', address: '1 Pole Lane', city: 'North Pole', state: 'AL', zip: '67891')

    visit parks_path

    expect(page).to have_content "National Park"
    expect(page).to have_content "North Pole"
  end

  scenario "clicks link to park show page" do
    national_park = Park.create(name: 'National Park', address: '1 Dreary Lane', city: 'Muffin City', state: 'NJ', zip: '12345', description: 'Do you know the muffin man? The muffin man? THE MUFFIN MAN!')
    international_park = Park.create(name: 'International Park', address: '1 Pole Lane', city: 'North Pole', state: 'AL', zip: '67891')

    visit parks_path

    click_link "National Park"

    expect(page).to have_content national_park.name
    expect(page).to have_content national_park.address
    expect(page).to have_content national_park.city
    expect(page).to have_content national_park.state
    expect(page).to have_content national_park.zip
    expect(page).to have_content national_park.description
  end
end
