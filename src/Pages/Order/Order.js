import swal from '@sweetalert/with-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Order.css';
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
const Order = () => {
  const history = useHistory();
  // hook form import
  const { register, handleSubmit, reset } = useForm();
  // Single product info pass
  const [products, setProducts] = useState({});
  const { productid } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${productid}`).then((res) => {
      // console.log(res.data);
      setProducts(res.data);
      reset();
    });
  }, [reset]);
  const { name, price, img } = products;

  // loggedin user import
  const { user } = useAuth();
  // react hook from

  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/orders', data).then((res) => {
      console.log(res.data);
      swal('Order is placed successfully!', '', 'success');
      reset();
    });
    history.push('/products');
  };
  return (
    <div className="bg-bgGray px-4 py-24">
      <h2 className="text-center mb-16">Fill the information to procced</h2>
      <div className="container mx-auto text-center order grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              defaultValue={name}
              {...register('productName')}
            />
            <input type="hidden" defaultValue={price} {...register('price')} />
            <input type="hidden" defaultValue={img} {...register('img')} />
            <input
              required
              defaultValue={user?.displayName}
              type="text"
              {...register('name')}
            />
            <input
              required
              defaultValue={user?.email}
              type="text"
              {...register('email')}
            />
            <input placeholder="Phone" type="number" {...register('phone')} />
            <input placeholder="Address" type="text" {...register('address')} />
            <input placeholder="Zipcode" type="text" {...register('zipcode')} />
            <input placeholder="City" type="text" {...register('city')} />
            <input placeholder="State" type="text" {...register('state')} />
            <input placeholder="Country" type="text" {...register('country')} />
            <input
              defaultValue="pending"
              type="hidden"
              {...register('status')}
            />

            <input
              type="submit"
              value="Order Now"
              className="bg-blue1 text-white uppercase hover:bg-paste cursor-pointer transition-all"
            />
          </form>
        </div>
        <div>
          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="text-2xl font-bold mb-4 text-blue1">Order Info:</h3>
            <h3 className="text-lg font-semibold">Product Name: {name}</h3>
            <h4 className="text-lg font-semibold">Quantiy: 1</h4>
            <h4 className="text-lg font-semibold">Price: ${price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
