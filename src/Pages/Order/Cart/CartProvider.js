import React, { createContext } from 'react';
import ContextCart from './ContextCart';
import useCart from '../../../hooks/useCart';

export const CartContext = createContext();

const CartProvider = () => {
  const [state, removeItemFromCart, clearCartPage, increase, decrease] =
    useCart();
  return (
    <CartContext.Provider
      value={{
        ...state,
        removeItemFromCart,
        clearCartPage,
        increase,
        decrease,
      }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default CartProvider;
