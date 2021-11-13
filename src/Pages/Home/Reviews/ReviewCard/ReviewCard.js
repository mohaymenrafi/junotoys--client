import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
  const { name, feedback } = review;
  return (
    <div className="bg-white px-6 py-8 rounded-xl">
      <FontAwesomeIcon icon={faQuoteLeft} className="text-green text-2xl" />
      <p className="font-dm font-lg my-4">{feedback}</p>
      <h3 className="font-semibold text-xl">{name}</h3>
    </div>
  );
};

export default ReviewCard;
