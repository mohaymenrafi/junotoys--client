import axios from 'axios';
import './ReviewsHome.css';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const ReviewsHome = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://quiet-hollows-53010.herokuapp.com/feedbacks`)
      .then((res) => setReviews(res.data));
  }, []);
  return (
    <div className="reviewsHome">
      <div className="reviewsHome-inner py-32 px-4">
        <div className="container mx-auto">
          <h3 className="text-center uppercase font-semibold text-white mb-4">
            creative approache
          </h3>
          <h2 className=" mb-4 text-white text-center">
            What Our Clients Say About Us
          </h2>
          {/* review cards  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {reviews.map((review) => (
              <ReviewCard review={review} key={review._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsHome;
