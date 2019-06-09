const Review = require('../entities/review');

exports.getAllReviews = async (req, res) => {
    const reviews = await Review.find({}).sort({createdAt: -1})
    return res.json(reviews)
}

exports.addReview = async (req, res) => {
    const newReview = new Review({
        name: req.body.name,
        description: req.body.description,
        tasteRating: req.body.tasteRating,
        priceRating: req.body.priceRating,
        availabilityRating: req.body.priceRating,
    })

    await newReview.save()
    const reviews = await Review.find({}).sort({createdAt: -1})
    return res.json(reviews)
}