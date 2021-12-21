import swal from '@sweetalert/with-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [monitorAllOrder, setMonitorAllOrder] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:5000/orders')
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
  }, [monitorAllOrder]);
  const handleDelete = (id) => {
    swal('', 'Do you want to delete the order?', 'warning').then((value) => {
      if (value) {
        axios
          .delete(`http://localhost:5000/orders/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount === 1) {
              swal('Order is deleted!', '', 'success');
              setMonitorAllOrder(!monitorAllOrder);
            }
          });
      } else {
        swal('Order is not deleted!', '', 'info');
      }
    });
  };
  const handleConfirm = (id) => {
    swal('', 'Do you want to start processing the order?', 'warning').then(
      (value) => {
        if (value) {
          axios
            .put(`http://localhost:5000/orders/${id}`, {
              status: 'processing',
            })
            .then((res) => {
              console.log(res.data);
              swal('Order status has been updated!', '', 'success');
              setMonitorAllOrder(!monitorAllOrder);
            });
        } else {
          swal('Order is not deleted!', '', 'info');
        }
      }
    );
  };
  if (!allOrders.length) {
    return (
      <div className="z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }
  return (
    <div className="overflow-x-auto	">
      <h2 className="text-center">All Orders</h2>
      <div className="grid grid-cols-1 gap-8 mt-10">
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-4/12 hidden">Image</th>
              <th className="w-2/12">Name</th>
              <th className="w-2/12">Price</th>
              <th className="w-2/12">Status</th>
              <th className="w-2/12">Action</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {allOrders.map((order) => (
            <tr>
              <td className="px-2 w-2/6 text-center">
                {order.img ? (
                  <img src={order.img} alt="" className="w-full" />
                ) : (
                  'image not found'
                )}
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
                  {order.status === 'processing' ? (
                    ''
                  ) : (
                    <button
                      type="button"
                      className="bg-indigo-600 text-white rounded py-2 mt-4"
                      onClick={() => handleConfirm(order._id)}
                    >
                      Confirm
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default ManageAllOrders;
