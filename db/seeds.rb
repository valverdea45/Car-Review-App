# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# turtle = User.create(username: "CluelessTurtle", email: "theclueless@msn.com", bio: "they may think im clueless BUT IM NOT!", password: "turtle")

# rose = User.create(username: "Rose", email: "theprettiest@gmail.com", bio: "not to brag but I know I am pretty", password: "rosepedal")

adrian = User.create(username: "valverdea45", password: "123456", email: "adrian@adrian.com")

daniel = User.create(username: "daniel", password: "1234567", email: "daniel@daniel.com")

corolla = Car.create(year: 2015, make: "Toyota", model: "Corolla", image: "https://img2.carmax.com/assets/24671105/hero.jpg?width=400")

corolla_review_1 = corolla.reviews.create(user_id: adrian.id, car_id: corolla.id, body: "This car is super reliable and very inexpense TOYOTA POWER")

corolla_review_2 = corolla.reviews.create(user_id: daniel.id, car_id: corolla.id, body: "This car is super lame slow a f and tbh ugly")
