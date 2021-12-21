import React from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { name, img, price, rating, _id } = product;
  return (
    <div className="bg-white text-center  rounded-xl p-4 flex flex-col justify-between">
      <div>
        <div>
          <img src={img} className="mx-auto" alt="" />
        </div>
        <h3 className="font-semibold text-xl">{name}</h3>
        <p>{rating}</p>
        <h3 className="font-bold text-gray1">${price}</h3>
      </div>
      <NavLink to={`/product/${_id}`} className="block mx-auto">
        <button
          className="uppercase px-5 py-2 bg-blue2 rounded mt-4 text-white font-semibold"
          type="button"
        >
          view details
        </button>
      </NavLink>
    </div>
  );
};

export default ProductCard;
