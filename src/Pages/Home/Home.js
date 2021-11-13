import React from 'react';
import AboutHome from './About/AboutHome';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import ProductsHome from './Products/ProductsHome';
import ReviewsHome from './Reviews/ReviewsHome';

const Home = () => (
  <div>
    <Banner />
    <ProductsHome />
    <AboutHome />
    <ReviewsHome />
    <Info />
  </div>
);

export default Home;
