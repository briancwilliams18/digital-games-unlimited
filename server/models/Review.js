const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create the review schema
const reviewSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model if you have one
      required: true
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product model
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  // Create the Review model
const Review = mongoose.model('Review', reviewSchema);

// Export the Review model
module.exports = Review;
