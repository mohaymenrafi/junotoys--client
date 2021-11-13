import swal from '@sweetalert/with-react';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    swal('', 'Do you want to make this user an ADMIN?', 'warning').then(
      (value) => {
        if (value) {
          axios
            .put(`https://quiet-hollows-53010.herokuapp.com/users/admin`, data)
            .then((res) => {
              console.log(res.data);
              if (res.data.modifiedCount) {
                swal('Admin Created Successfully', '', 'success');
                reset();
              } else {
                swal('There is an error creating an admin', '', 'error');
              }
            });
        } else {
          swal('Admin is not created', '', 'info');
        }
      }
    );
  };
  return (
    <div className="admin">
      <h2 className="text-center mb-8">Add Admins</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
        <input
          type="email"
          {...register('email')}
          className="border-2 border-blue1"
        />
        <input
          type="submit"
          className="bg-blue1 hover:bg-paste transition-all text-white font-medium text-xl uppercase cursor-pointer"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
