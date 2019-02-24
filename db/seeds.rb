# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


jack = User.create!(name: "Jack", email: "jack@suremail.info", password: "password")
jill = User.create!(name: "jill", email: "jill@suremail.info", password: "password")
peanut = User.create!(name: "peanut", email: "peanut@suremail.info", password: "password")
peaches = User.create!(name: "peaches", email: "peaches@suremail.info", password: "password")
smith = User.create!(name: "smith", email: "smith@suremail.info", password: "password")
trip = Trip.create!(name: "Test trip", host: jack)
party = Trip.create!(name: "Party trip", host: jill)
house_party = Trip.create!(name: "House Party", host: jill)
UserTrip.create!(user: jill, trip: trip)
UserTrip.create!(user: peanut, trip: trip)
UserTrip.create!(user: peaches, trip: trip)
UserTrip.create!(user: smith, trip: trip)
UserTrip.create!(user: jack, trip: party)
UserTrip.create!(user: smith, trip: party)
UserTrip.create!(user: peaches, trip: party)
trip.locations.create(lat: 1, long: 2)
form = Form.create!(user: jack, trip: trip, signed: true)
