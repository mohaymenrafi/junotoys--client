import {
  faHeadset,
  faMoneyBillWave,
  faPercent,
  faShippingFast,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Info = () => (
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-24 px-4">
    <div className="flex items-top lg:border-r lg:justify-center pl-16 sm:pl-0 my-4 md:my-0">
      <div>
        <FontAwesomeIcon
          className="mt-2 text-2xl text-black"
          icon={faPercent}
        />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">Best Prices </h3>
        <h3 className="text-md font-dm text-gray1">Affordable </h3>
      </div>
    </div>
    <div className="flex items-top lg:border-r lg:justify-center pl-16 sm:pl-0 my-4 md:my-0">
      <div>
        <FontAwesomeIcon
          className="mt-2 text-2xl text-black"
          icon={faShippingFast}
        />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">Fast Shipment </h3>
        <h3 className="text-md font-dm text-gray1">Express </h3>
      </div>
    </div>
    <div className="flex items-top lg:border-r lg:justify-center pl-16 sm:pl-0 my-4 md:my-0">
      <div>
        <FontAwesomeIcon
          className="mt-2 text-2xl text-black"
          icon={faMoneyBillWave}
        />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">Buyers Protection </h3>
        <h3 className="text-md font-dm text-gray1">Guarantee </h3>
      </div>
    </div>
    <div className="flex items-top lg:justify-center pl-16 sm:pl-0 my-4 md:my-0">
      <div>
        <FontAwesomeIcon
          className="mt-2 text-2xl text-black"
          icon={faHeadset}
        />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">Live Support </h3>
        <h3 className="text-md font-dm text-gray1">Online </h3>
      </div>
    </div>
  </div>
);

export default Info;
