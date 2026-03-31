import React, { use, useState } from 'react';
import AllProducts from './AllProducts';
import CartProducts from './CartProducts';


const MainSection = ({ data }) => {
  // console.log(useData);

  const [products, setProducts] = useState('Products');

  return (
    <div className="my-34 max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto">
      {/* Header part */}
      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto text-center">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-xl font-semibold text-gray-500 my-7">
          Choose from our curated collection of premium digital products
          designed <br className="hidden md:block" /> to boost your productivity
          and creativity.
        </p>
      </div>

      <div className="w-44 mx-auto p-1 border border-gray-200 rounded-3xl mt-5 mb-7 text-white">
        <button
          onClick={() => setProducts('Products')}
          className={`px-2 py-1.5 mr-2 ${products === 'Products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-white text-black'} rounded-3xl hover:cursor-pointer`}>
          Products
        </button>
        <button
          onClick={() => setProducts('Cart')}
          className={`px-3.5 py-1.5 ${products === 'Cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-white text-black'}  rounded-3xl hover:cursor-pointer`}>
          Cart (0)
        </button>
      </div>

      {/* Main part */}
      {products === 'Products' ? (
        <AllProducts data={data} />
      ) : (
        <CartProducts />
      )}
    </div>
  );
};

export default MainSection;
