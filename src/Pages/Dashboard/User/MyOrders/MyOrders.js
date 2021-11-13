import swal from '@sweetalert/with-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
  // getting user info
  const { user } = useAuth();
  // fetching orders from server
  const [allOrders, setAllOrders] = useState([]);
  const [monitorMyOrder, setMonitorMyOrder] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://quiet-hollows-53010.herokuapp.com/orders?email=${user?.email}`
      )
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
  }, [monitorMyOrder]);

  // delete user order
  const handleDelete = (orderId) => {
    swal('', 'Do you want to delete the order?', 'warning').then((value) => {
      if (value) {
        axios
          .delete(`https://quiet-hollows-53010.herokuapp.com/orders/${orderId}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount === 1) {
              swal('Order is deleted!', '', 'success');
              setMonitorMyOrder(!monitorMyOrder);
            }
          });
      } else {
        swal('Order is not deleted!', '', 'info');
      }
    });
  };

  if (!allOrders.length) {
    return <h2 className="text-center">No orders found</h2>;
  }
  return (
    <div>
      <h2 className="text-center">My Orders</h2>
      <div className="grid grid-cols-1 gap-8 mt-10 overflow-x-auto	">
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-2/6">Image</th>
              <th className="w-1/6">Name</th>
              <th className="w-1/6">Price</th>
              <th className="w-1/6">Status</th>
              <th className="w-1/6">Action</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {allOrders.map((order) => (
            <tr>
              <td className="px-2 w-2/6 text-center">
                {order.img ? <img src={order.img} alt="" /> : 'image not found'}
              </td>
              <td className="px-2 w-1/6 text-center font-dm">
                {order.productName || 'name'}
              </td>
              <td className="px-2 w-1/6 text-center font-dm">
                ${order.price || 'price'}
              </td>
              <td className="px-2 w-1/6 text-center font-dm">
                <div className="flex flex-col">
                  <h3 className="capitalize font-dm text-xl border py-2 border-blue-500">
                    {order.status}
                  </h3>
                </div>
              </td>
              <td className="px-2 w-1/6 text-center font-dm ">
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="bg-red-500 px-4 py-2 rounded text-white font-semibold"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default MyOrders;
