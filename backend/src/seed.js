const Review = require('./entities/review')

exports.seedDatabase = async function() {
    console.log("SEED ON KURWA")
    const reviews = createReviews()

    await Review.create(reviews);
}

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createReviews = () => {
    let reviews = []
    for (let i = 0; i < 10; i++) {
        reviews.push({
            name: `Name ${i}`,
            description: `Very sophisticated description ${i}`,
            tasteRating: randomInt(1, 5),
            priceRating: randomInt(1, 5),
            availabilityRating: randomInt(1, 5),
        })
    }

    return reviews
}