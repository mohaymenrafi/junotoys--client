import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { loginUser, googleSignIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const history = useHistory();
  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
  };
  return (
    <div className="bg-bgGray px-4 py-24 text-center">
      <div className="container max-w-xs	 mx-auto login">
        <h2>Login </h2>

        <button
          type="button"
          className="rounded-full bg-blue1 hover:bg-paste text-white font-semibold py-3 w-full transition-all my-6"
          onClick={() => googleSignIn(location, history)}
        >
          Log in with Google
        </button>
        <h3 className="font-semibold">or Sign in with Email</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <input placeholder="Email" type="text" {...register('email')} />
          <input
            placeholder="Password"
            type="password"
            {...register('password')}
          />
          <input
            type="submit"
            value="login"
            className="uppercase font-medium bg-blue1 hover:bg-paste text-white cursor-pointer transition-all"
          />
        </form>
        <p className="mt-3 font-medium ">
          Not registered yet? &nbsp;
          <span>
            <Link to="/register" className="text-paste font-semibold">
              Create an Account
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
