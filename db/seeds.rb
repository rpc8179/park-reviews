# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Park.create(
  name: "Boston Common",
  address: "139 Tremont Street",
  city: "Boston",
  state: "MA",
  zip: "02134",
  description: "Send it to Zoom!  There is a carousel!!"
)

Park.create(
  name: "Public Garden",
  address: "139 Tremont Street",
  city: "Boston",
  state: "PA",
  zip: "02134",
  description: "Send it to Philly!!  There is a cheesesteak!!"
)

Park.create(
  name: "Yellowstone",
  address: "139 Tremont Street",
  city: "Boston",
  state: "NJ",
  zip: "02134",
  description: "Send it to Atlantic City!  There is a shore!!"
)
