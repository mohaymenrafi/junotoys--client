import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { saveToLocal } from '../../../Utilities/localStorage';
import Details from './Details/Details';
import Review from './Review/Review';

/* eslint-disable react-hooks/exhaustive-deps */

const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const [info, setInfo] = useState('desc');
  const { productid } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${productid}`).then((res) => {
      setProducts(res.data);
    });
  }, []);
  const { name, price, img, rating, shortDesc1, shortDesc2, longDesc, _id } =
    products;

  return (
    <div className="bg-bgGray">
      <div className=" py-28 px-4">
        <div className="container max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <aside>
            <img src={img} alt="" className="rounded-xl" />
          </aside>
          <div className="md:col-span-2">
            <h3 className="text-5xl font-bold text-blue1 mb-4">{name}</h3>
            <h4 className="text-paste font-semibold text-2xl">${price}</h4>
            <p>{rating}</p>
            <p className="mb-3 font-dm">{shortDesc1}</p>
            <p className="mb-3 font-dm">{shortDesc2}</p>
            <Link exact to="/products">
              <button
                type="button"
                className="bg-paste py-3 px-6 rounded-full font-qsand text-md text-white font-medium mt-5 shadow"
                onClick={() => saveToLocal(_id)}
              >
                Add to Cart
              </button>
            </Link>
            {/* <Link exact to={`/order/${_id}`}>
              <button
                type="button"
                className="bg-paste py-3 px-6 rounded-full font-qsand text-md text-white font-medium mt-5 shadow"
                onClick={() => saveToLocal(_id)}
              >
                Add to Cart
              </button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* details  */}
      <div className="container max-w-screen-lg mx-auto grid grid-cols-1">
        <div className="grid grid-cols-2 gap-4">
          <button
            className="text-xl font-semibold px-6 py-3 bg-blue1 text-white"
            type="button"
            onClick={() => setInfo('desc')}
          >
            Details
          </button>
          <button
            className="text-xl font-semibold px-6 py-3 bg-blue1 text-white"
            type="button"
            onClick={() => setInfo('review')}
          >
            Review
          </button>
        </div>
        <div className={`${info === 'desc' ? 'block' : 'hidden'} mb-24`}>
          <Details longDesc={longDesc} />
        </div>
        <div className={`${info === 'review' ? 'block' : 'hidden'}`}>
          <Review products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
