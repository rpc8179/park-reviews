require "rails_helper"

feature "profile photo" do
  scenario "user uploads a profile photo" do
    visit root_path
    click_link "Sign Up"

    fill_in "Email", with: "evildead@reference.com"
    fill_in "Password", with: "ev1ld34d"
    fill_in "Password confirmation", with: "ev1ld34d"
    attach_file :user_profile_photo, "#{Rails.root}/spec/support/images/photo.png"
    click_button "Sign up"

    expect(page).to have_content("Welcome! You have signed up successfully.")
  end
end
