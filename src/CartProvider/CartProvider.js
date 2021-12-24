import { createContext } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext();

/* eslint-disable react/prop-types */

const CartProvider = ({ children }) => {
  const { state, removeItemFromCart, clearCartPage, increase, decrease } =
    useCart();
  // const { state, ...allCartContext } = useCart();
  // console.log(allCartContext);
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
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
