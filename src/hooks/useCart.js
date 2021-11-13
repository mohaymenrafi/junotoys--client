import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../Utilities/localStorage';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const storedCart = getStoredCart();
  const keys = Object.keys(storedCart);
  useEffect(() => {
    axios
      .post('https://quiet-hollows-53010.herokuapp.com/products/bykeys', keys)
      .then((res) => console.log(res));
  });

  return [cart, setCart];
};

export default useCart;
