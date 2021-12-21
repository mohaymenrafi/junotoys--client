import './Review.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import useAuth from '../../../../hooks/useAuth';

/* eslint-disable react/prop-types */
const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/feedbacks', data).then((res) => {
      console.log(res);
      swal("We've received your review!", '', 'success');
      reset();
    });
  };
  return (
    <div className="bg-white p-6 mt-4 grid grid-cols-1">
      <div className=" review">
        <h3 className="text-3xl text-blue1 font-semibold mb-4">
          Add your feedback here
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input
            type="text"
            defaultValue={products?.name}
            {...register('productName')}
          /> */}
          <input
            type="text"
            defaultValue={user?.displayName}
            placeholder="Name"
            {...register('name')}
          />
          <input
            type="text"
            defaultValue={user?.email}
            placeholder="Email"
            {...register('email')}
          />
          <textarea
            rows="5"
            type="text"
            placeholder="Your Feedback"
            {...register('feedback')}
          />

          <input
            type="submit"
            value="Submit"
            className="uppercase font-semibold text-xl bg-blue1 hover:bg-paste hover:border-paste text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
