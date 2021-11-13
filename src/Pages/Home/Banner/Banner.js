import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => (
  <div className="banner py-32 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 font-dm">
      <div>
        <h2>Pick the best toy for your kid</h2>
        <p className="text-gray2 text-lg my-5">
          We offer a premium service, weather you are shopping at one of our
          flagship stores or via our website
        </p>

        <Link to="/products">
          <button
            type="button"
            className="px-6 py-3 bg-paste text-white font-semibold rounded-full hover:bg-blue1 transition-all"
          >
            {' '}
            Discover Now
          </button>
        </Link>
      </div>
      <div />
    </div>
  </div>
);

export default Banner;
