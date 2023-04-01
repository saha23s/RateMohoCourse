# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

courses = Course.create([
    {
        name: "Software Design and Development"
    },
    {
        name: "Comparative Intro to Philosophy"
    },
    {
        name: "Rudiments of Music"
    },
    {
        name: "Engineering Robotics System"
    }
])

reviews = Review.create([
    {
        title: 'Great course!',
        description: 'I love the class!',
        score1: 5,
        score2: 4,
        score3: 5,
        score4: 5,
        course: courses.first
    },

    {
        title: 'Moderate course!',
        description: 'I like the class!',
        score1: 3,
        score2: 3,
        score3: 3,
        score4: 3,
        course: courses.first
    }
])