import swal from '@sweetalert/with-react';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddAProduct.css';

const AddAProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`http://localhost:5000/products`, data)
      .then((res) => {
        console.log(res.data);
        swal('Thanks!', 'The prodduct has been added to the shop!', 'success');
        reset();
      });
  };
  return (
    <div className="addProduct">
      <h2 className="text-center mb-8">
        Fill those information for adding a product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto	">
        <input placeholder="Product Name" {...register('name')} type="text" />
        <input
          placeholder="Product Price"
          {...register('price')}
          type="number"
        />
        <textarea
          placeholder="Short Description 1"
          {...register('shortDesc1')}
          type="text"
        />
        <textarea
          placeholder="Short Description 2"
          {...register('shortDesc2')}
          type="text"
        />
        <textarea
          rows="6"
          placeholder="Detail Description"
          {...register('longDesc')}
          type="text"
        />
        <input placeholder="SKU" {...register('sku')} type="text" />
        <input
          placeholder="Rating"
          {...register('rating', { min: 1, max: 5 })}
          type="text"
        />
        <input placeholder="Image Link" {...register('img')} type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddAProduct;
