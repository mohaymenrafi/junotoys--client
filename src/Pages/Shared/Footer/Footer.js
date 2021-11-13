import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../../../images/logo.png';

const Footer = () => (
  <div className="bg-blue2 pt-24 pb-8 px-4">
    <div className="container mx-auto">
      <img src={logo} alt="" className="mx-auto" />
      <div className="flex justify-center mt-6">
        <Link className="text-white font-medium mx-3" exact to="/">
          Home
        </Link>
        <Link className="text-white font-medium mx-3" exact to="/products">
          Products
        </Link>
        <Link className="text-white font-medium mx-3" exact to="/contact">
          Contact
        </Link>
        <Link className="text-white font-medium mx-3" exact to="/login">
          Login
        </Link>
      </div>
      <div className="flex justify-center mt-5 text-white">
        <SocialIcon
          url="#"
          network="facebook"
          bgColor="white"
          className="mx-2"
          fgColor="#182352"
        />
        <SocialIcon
          url="#"
          network="twitter"
          bgColor="white"
          className="mx-2"
          fgColor="#182352"
        />
        <SocialIcon
          url="#"
          network="instagram"
          bgColor="white"
          className="mx-2"
          fgColor="#182352"
        />
      </div>
      <div className="mt-16 border-t border-lightWhite">
        <p className="text-white text-center mt-4">
          ThemeREX{' '}
          <span className="text-lightWhite">© 2021. All Rights Reserved.</span>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
