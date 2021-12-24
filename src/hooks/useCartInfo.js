import { useContext } from 'react';
import { CartContext } from '../CartProvider/CartProvider';

const useCartInfo = () => useContext(CartContext);
export default useCartInfo;
