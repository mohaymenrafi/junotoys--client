import swal from '@sweetalert/with-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ProductCard = ({ product, monitorAllOrder, setMonitorAllOrder }) => {
  const { name, img, price, rating, _id } = product;

  // delete product
  const handleDelete = (id) => {
    swal('', 'Do you want to delete the order?', 'warning').then((value) => {
      if (value) {
        axios
          .delete(`https://quiet-hollows-53010.herokuapp.com/products/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount === 1) {
              swal('Order is deleted!', '', 'success');
              setMonitorAllOrder(!monitorAllOrder);
            }
          });
      } else {
        swal('Order is not deleted!', '', 'info');
      }
    });
  };
  return (
    <div className="bg-white text-center  rounded-xl p-4 flex flex-col justify-between">
      <div>
        <div>
          <img src={img} className="mx-auto" alt="" />
        </div>
        <NavLink to={`/product/${_id}`} className="block mx-auto">
          <h3 className="font-semibold text-xl">{name}</h3>
        </NavLink>
        <p>{rating}</p>
        <h3 className="font-bold text-gray1">${price}</h3>
      </div>

      <button
        className="uppercase px-5 py-2 bg-red-500 rounded mt-4 text-white font-semibold"
        type="button"
        onClick={() => handleDelete(_id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
