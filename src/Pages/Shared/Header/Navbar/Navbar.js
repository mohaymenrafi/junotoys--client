import {
  faBars,
  faShoppingCart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../images/logo.png';
import useFirebase from '../../../../hooks/useFirebase';

const Navbar = () => {
  const { user } = useFirebase();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-transparent py-4">
      {/* nav parent div  */}
      <div className="relative lg:container lg:mx-auto grid grid-cols-2 lg:grid-cols-3 items-center">
        {/* logo div  */}
        <div className="pl-6">
          <h2 className="text-left font-qsand font-semibold text-3xl text-blue1">
            <Link exact to="/">
              <img src={logo} alt="" />
            </Link>
          </h2>
        </div>
        {/* hamburger div  */}
        <div className="flex justify-end pr-6 lg:hidden">
          <button
            type="button"
            className="text-white bg-blue1 py-2 px-4 font-semibold "
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        {/* nav menu div  */}
        <div
          className={`${
            navOpen ? 'h-auto  py-8' : 'h-0 '
          } bg-blue1 col-span-2 absolute top-57px left-0 right-0 lg:h-auto lg:py-2 lg:relative lg:bg-transparent lg:top-0`}
          id="navbar"
        >
          <ul className="flex flex-col text-white font-qsand font-semibold lg:flex-row lg:justify-end lg:items-center lg:text-blue1">
            <NavLink
              exact
              className="py-2 px-2 mx-2 lg:hover:text-paste"
              onClick={() => setNavOpen(false)}
              to="/"
            >
              {' '}
              Home
            </NavLink>
            <NavLink
              exact
              className="py-2 px-2 mx-2 lg:hover:text-paste"
              onClick={() => setNavOpen(false)}
              to="/products"
            >
              {' '}
              Products
            </NavLink>
            <NavLink
              exact
              className="py-2 px-2 mx-2 lg:hover:text-paste"
              onClick={() => setNavOpen(false)}
              to="/contact"
            >
              {' '}
              Contact
            </NavLink>
            {!user?.email ? (
              <NavLink
                exact
                className="py-2 px-2 mx-2 lg:hover:text-paste"
                onClick={() => setNavOpen(false)}
                to="/login"
              >
                {' '}
                Login
              </NavLink>
            ) : (
              ''
            )}
            {user?.email ? (
              <NavLink
                exact
                className="py-2 px-2 mx-2 lg:hover:text-paste"
                onClick={() => setNavOpen(false)}
                to="/dashboard"
              >
                {' '}
                Dashboard
              </NavLink>
            ) : (
              ''
            )}
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
