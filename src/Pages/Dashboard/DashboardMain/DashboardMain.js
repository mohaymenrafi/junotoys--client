import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardMain = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <p className="text-black font-dm text-xl">
        Hi,{' '}
        <span className="text-paste font-semibold font-qsand">
          {user?.displayName}.
        </span>
        <br />
        This is your account dashboard. From your account dashboard. you can
        easily check & view your recent orders, manage your orders and account
        details.
      </p>
    </div>
  );
};

export default DashboardMain;
