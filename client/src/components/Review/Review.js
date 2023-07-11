import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <h4 className="review-user">{review.user}</h4>
      <p className="review-rating">Rating: {review.rating}</p>
      <p className="review-comment">{review.comment}</p>
      <p className="review-timestamp">{review.createdAt}</p>
    </div>
  );
};

export default Review;
