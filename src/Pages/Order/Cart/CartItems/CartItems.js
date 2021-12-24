import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCartInfo from '../../../../hooks/useCartInfo';

/* eslint-disable react/prop-types */

const CartItems = ({ img, name, price, _id, quantity }) => {
  const { removeItemFromCart, increase, decrease } = useCartInfo();
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center border-b py-4">
      <div className="md:col-span-3">
        <img src={img} alt="" />
      </div>
      <div className="md:col-span-3">
        <h3 className="text-xl font-dm font-medium">{name}</h3>
      </div>
      <div className="md:col-span-3 text-black flex items-center">
        <FontAwesomeIcon
          icon={faMinus}
          className="cursor-pointer"
          onClick={() => decrease(_id)}
        />
        {/* <input
          type="number"
          defaultValue="10"
          className="w-20 mx-4 outline-none text-center font-dm"
        /> */}
        <span className="w-20 mx-4 outline-none text-center font-dm bg-white text-black">
          {quantity === 0 ? removeItemFromCart(_id) : quantity}
        </span>
        <FontAwesomeIcon
          icon={faPlus}
          className="cursor-pointer"
          onClick={() => increase(_id)}
        />
      </div>
      <div className="md:col-span-2">
        <p className="text-xl font-semibold">${price}</p>
      </div>
      <div className="md:col-span-1">
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => removeItemFromCart(_id)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartItems;
