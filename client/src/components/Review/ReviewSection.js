import React, { useState, useEffect } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://BLANK-INSERT.com/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  const handleReviewSubmit = (review) => {
    fetch('https://BLANK-INSERT.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews([...reviews, data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="review-section">
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default ReviewSection;
