import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminProductCard from './AdminProductCard';

/* eslint-disable react-hooks/exhaustive-deps */

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [monitorAllOrder, setMonitorAllOrder] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((res) => {
        setProducts(res.data);
        console.log(products);
      })
      .catch((error) => console.error(error));
  }, [monitorAllOrder]);

  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {products.map((product) => (
          <AdminProductCard
            key={product._id}
            product={product}
            monitorAllOrder={monitorAllOrder}
            setMonitorAllOrder={setMonitorAllOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageAllProducts;
