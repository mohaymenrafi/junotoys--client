import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import { CartContext } from './CartProvider';
import CartItems from './CartItems/CartItems';
import EmptyCart from './EmptyCart';

const ContextCart = () => {
  const { items, clearCartPage, totalItem, totalAmount } =
    useContext(CartContext);
  if (items.length === 0) return <EmptyCart />;
  return (
    <div className="container mx-auto border rounded-md py-16 px-6 my-12">
      {/* cart header  */}

      <header className="flex items-center border-b pb-4">
        <FontAwesomeIcon icon={faArrowLeft} />
        <Link to="/products" className="font-dm ml-3">
          Continue Shopping
        </Link>
      </header>

      {/* cart body  */}

      <section className="mt-8">
        <h3 className="text-2xl text-blue font-dm font-semibold">
          Shopping Cart
        </h3>
        <p className="text-lg font-regular font-dm">
          You have {items?.length} products & {totalItem} items in shopping
          cart.
        </p>

        {/* cart items  */}

        <div
          className="mt-4 rounded-xl p-8 h-48rem shadow"
          style={{ background: 'rgba(0, 0, 0, 0.02)' }}
        >
          <Scrollbars style={{ height: 500 }}>
            <div>
              {items?.map((item) => (
                <CartItems {...item} key={item._id} />
              ))}
            </div>
          </Scrollbars>
        </div>

        {/* cart total   */}

        <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
          <div>
            <button
              type="button"
              className="text-lg text-white font-semibold bg-blue1 rounded px-4 py-2 mx-2"
              onClick={clearCartPage}
            >
              Clear Cart
            </button>
            <button
              type="button"
              className="text-lg text-white font-semibold bg-green rounded px-4 py-2 mx-2"
            >
              Checkout
            </button>
          </div>
          <div className="flex ml-auto">
            <h4 className="text-2xl text-black font-dm font-medium mr-4">
              Cart Total:
            </h4>
            <p className="text-2xl text-black font-dm font-semibold">
              ${totalAmount}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContextCart;
