# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


jack = User.create!(name: "Jack", email: "jack@suremail.info", password: "password")
trip = Trip.create!(name: "Test trip", host: jack)
form = Form.create!(user: jack, trip: trip, signed: true)
