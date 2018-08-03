User.create!(
  email: 'admin@admin.admin',
  password: 'aaaaaaa',
  role: 'admin'
)
User.create!(
  email: 'user@user.user',
  password: 'aaaaaaa'
)
User.create!(
  email: 'bob@ross.paintings',
  password: 'aaaaaaa'
)

Park.create!(
  name: "Boston Common",
  address: "139 Tremont Street",
  city: "Boston",
  state: "MA",
  zip: "02134",
  description: "There is a carousel!!"
)
Park.create!(
  name: "Acadia",
  address: "20 McFarlane Hill Dr.",
  city: "Bar Harbor",
  state: "ME",
  zip: "00345",
  description: "This is a park that we googled like 45 minutes before we had to present"
)
Park.create!(
  name: "Yellowstone",
  address: "Center Loop Road (All of it)",
  city: "Yellowstone County",
  state: "MT",
  zip: "82190",
  description: "Geysers wow! and other stuff as well!"
)

Review.create!(
  rating: 5,
  body: 'What a wonderful park!',
  user_id: 1,
  park_id: 1
)
Review.create!(
  rating: 1,
  body: 'I lost my dog here. :C',
  user_id: 1,
  park_id: 2
)
Review.create!(
  rating: 4,
  body: 'What a delight to the eyes, Trees everywhere, Ahhhhh~',
  park_id: 1,
  user_id: 1
)

ReviewUpvote.create!(
  user_id: 1,
  review_id: 1,
  value: 1,
)
ReviewUpvote.create!(
  user_id: 2,
  review_id: 1,
  value: 1,
)
ReviewUpvote.create!(
  user_id: 3,
  review_id: 1,
  value: -1,
)
ReviewUpvote.create!(
  user_id: 3,
  review_id: 2,
  value: -1,
)
