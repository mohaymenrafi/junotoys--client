import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const ProductsHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://quiet-hollows-53010.herokuapp.com/products`)
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="bg-bgGray px-4 py-16 md:py-28 ">
      <div className="container mx-auto">
        <h3 className="text-center uppercase font-semibold mb-4">
          shop juno toys & games
        </h3>
        <h2 className="text-center mb-4">Popular In Store</h2>
        {/* products list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
