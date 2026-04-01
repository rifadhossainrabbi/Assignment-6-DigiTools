import React from 'react';

const CartCard = ({ product, handleDeleteSelectedProducts }) => {
  return (
    <div className="flex items-center gap-6 justify-between p-10 rounded-2xl bg-[#fafbfc]">
      <div className="flex items-center gap-6">
        <div className="p-3 border border-gray-300 inline-block rounded-full bg-[#f5f5f5]">
          <img className="h-6 w-6" src={product.icon} alt={product.name} />
        </div>

        <div>
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            {product.name}
          </h2>
          <p>
            {product.price}/{product.period}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="btn text-red-500"
        onClick={() => handleDeleteSelectedProducts(product)}>
        Remove
      </button>
    </div>
  );
};

export default CartCard;