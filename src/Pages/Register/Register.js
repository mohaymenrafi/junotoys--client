import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
  const { registerUser, googleSignIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const history = useHistory();
  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, history);
    console.log(data);
  };
  return (
    <div className="bg-bgGray px-4 py-24 text-center">
      <div className="container max-w-xs	 mx-auto login">
        <h2>Sign up here </h2>

        <button
          type="button"
          className="rounded-full bg-blue1 hover:bg-paste text-white font-semibold py-3 w-full transition-all my-6"
          onClick={() => googleSignIn(location, history)}
        >
          Sign up with Google
        </button>
        <h3 className="font-semibold">or Sign up with Email</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <input placeholder="Name" type="text" {...register('name')} />
          <input placeholder="Email" type="text" {...register('email')} />
          <input
            placeholder="Password"
            type="password"
            {...register('password')}
          />
          <input
            type="submit"
            value="Sign up"
            className="uppercase font-medium bg-blue1 hover:bg-paste text-white cursor-pointer transition-all"
          />
        </form>
        <p className="mt-3 font-medium ">
          Already have an account? &nbsp;
          <span>
            <Link to="/login" className="text-paste font-semibold">
              Log in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
