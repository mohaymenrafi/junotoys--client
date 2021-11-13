import React from 'react';
import useFirebase from '../../../../hooks/useFirebase';

const Topbar = () => {
  const { user, logOut } = useFirebase();
  return (
    <div
      className={`${!user?.email ? 'hidden' : 'bg-blue1 text-white px-4 py-2'}`}
    >
      <div className="container mx-auto flex justify-between">
        <div>
          <p>
            <span className="font-semibold">Hello,</span> {user?.displayName}
          </p>
        </div>
        <div>
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
