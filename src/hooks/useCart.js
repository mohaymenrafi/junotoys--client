// https://quiet-hollows-53010.herokuapp.com/

import axios from 'axios';
import { useReducer, useEffect } from 'react';
import cartReducer from '../Pages/Order/Cart/cartReducer';
import {
  clearCart,
  getStoredCart,
  localDecrement,
  localIncrement,
  removeFromCart,
} from '../Utilities/localStorage';

export default function useCart() {
  const initialState = {
    items: [],
    totalAmount: 0,
    totalItem: 0,
  };
  /* eslint-disable */
  
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const getCartInfo = async () => {
    const url = `http://localhost:5000/products/bykeys`;
    const storedCart = getStoredCart();
    const keys = Object.keys(storedCart);
    const res = await axios.post(url, keys);
    const products = await res.data;
    if (products.length) {
      const updateQnty = [];
      for (const key in storedCart) {
        const addedProduct = products.find((product) => product._id === key);
        if (addedProduct) {
          const quantity = storedCart[key];
          addedProduct.quantity = quantity;
          updateQnty.push(addedProduct);
        }
      }
      dispatch({ type: 'SUCCESS_CART_PRODUCTS', payload: updateQnty });
    }
  };
  /* eslint-enable */
  useEffect(() => {
    getCartInfo();
  }, [state.items, state.totalItem]);

  useEffect(() => {
    dispatch({
      type: 'GET_TOTAL',
    });
  }, [state.items]);

  // remove item from cart
  const removeItemFromCart = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
    removeFromCart(id);
  };
  const clearCartPage = () => {
    dispatch({
      type: 'CLEAR_CART_PAGE',
    });
    clearCart();
  };
  const increase = (id) => {
    localIncrement(id);
    dispatch({
      type: 'INCREMENT',
      payload: id,
    });
  };
  const decrease = (id) => {
    localDecrement(id);
    dispatch({
      type: 'DECREMENT',
      payload: id,
    });
  };

  return { state, removeItemFromCart, clearCartPage, increase, decrease };
}
