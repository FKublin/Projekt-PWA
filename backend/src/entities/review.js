'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: { type: String, required: true },
	description: { type: String, required: true },
    tasteRating: {type: Number, required: true},
    priceRating: {type: Number, required: true},
	availabilityRating: {type: Number, required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', ReviewSchema);
