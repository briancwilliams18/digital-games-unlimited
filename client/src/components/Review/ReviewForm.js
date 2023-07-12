import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      rating,
      comment,
    };

    onSubmit(newReview);
    setRating('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Review</h3>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
