import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';

const CartProducts = ({data, selectedProducts, setSelectedProducts }) => {
  console.log(selectedProducts, 'selectedProducts');

  const handleDeleteSelectedProducts = (product) => {
    console.log(selectedProducts, 'selectedProducts');
    const filteredProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct.name !== product.name,
    );
    console.log(filteredProducts, 'filteredProducts');
    setSelectedProducts(filteredProducts);
    toast.success(`${data.name} is Successfuly Removed from Cart`);
  };

  let totalPrice = 0;
  selectedProducts.forEach((product) => {
    totalPrice += product.price;
  })

  return (
    <div>
      <div className="space-y-5">
        {selectedProducts.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center flex-col gap-4">
            <h2 className="font-bold text-4xl">No Products selected yet</h2>
            <p>Go to Products tab to select players</p>
          </div>
        ) : (
          selectedProducts.map((product) => {
            return (
              <CartCard
                key={product.id}
                product={product}
                handleDeleteSelectedProducts={handleDeleteSelectedProducts}
              />
            );
          })
        )}
      </div>

      {selectedProducts.length !== 0 ? (
        <>
          <div className="flex justify-between mt-4 mb-8">
            <p>Total</p>
            <p className="text-2xl font-bold">
              <span className="text-2xl font-bold">$</span>
              {totalPrice}
            </p>
          </div>

          <button className="btn btn-primary w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out">
            Proceed to Checkout
          </button>
        </>
      ) : null
      }
    </div>
  );
};

export default CartProducts;