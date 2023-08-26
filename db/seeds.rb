# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

turtle = User.create(username: "CluelessTurtle", email: "theclueless@msn.com", bio: "they may think im clueless BUT IM NOT!", password: "turtle")

rose = User.create(username: "Rose", email: "theprettiest@gmail.com", bio: "not to brag but I know I am pretty", password: "rosepedal")