import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="bg-bgGray py-32 px-4">
    <div className="container mx-auto">
      <h2 className="text-blue1 text-9xl font-qsand font-bold text-center">
        404
      </h2>
      <h3 className="text-blue1 text-4xl font-qsand font-bold text-center mt-8 mb-4">
        Oops...
      </h3>
      <p className="text-center text-gray2 font-dm font-medium">
        We're sorry, <br /> but something went wrong
      </p>
      <Link exact to="/">
        <button
          type="button"
          className="bg-paste py-3 px-6 rounded-full font-qsand text-md text-white font-medium block mx-auto mt-5"
        >
          Back to Home
        </button>
      </Link>
    </div>
  </div>
);

export default NotFound;
