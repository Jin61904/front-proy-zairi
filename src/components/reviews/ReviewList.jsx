import React from "react";
import CreateReview from "../components/reviews/CreateReview";
import ReviewList from "../components/reviews/ReviewList";
import "../styles/ReviewsPage.css";

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <h1>Reseñas</h1>
      <div className="create-review-section">
        <CreateReview />
      </div>
      <div className="divider" />
      <div className="review-list-section">
        <ReviewList />
      </div>
    </div>
  );
};

export default ReviewsPage;
