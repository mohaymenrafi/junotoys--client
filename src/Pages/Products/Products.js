import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);
  if (!products.length) {
    return (
      <div className=" h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }
  return (
    <div className="bg-bgGray py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-center">Shop</h2>
        <FontAwesomeIcon icon={faChevronDown} className="block mx-auto mt-5" />
        {/* products list  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
