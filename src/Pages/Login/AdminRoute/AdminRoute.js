import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

/* eslint-disable*/
const AdminRoute = ({ children, ...rest }) => {
  const { user,admin, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className=" h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
