const express = require('express');
const router = express.Router();
const reviewService = require('../services/review.service')


router.get('/all', reviewService.getAllReviews)
router.post('/add', reviewService.addReview)

module.exports = router;
