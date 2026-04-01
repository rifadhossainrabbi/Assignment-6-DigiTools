import React, { useState } from 'react';
import CheckImg from '../src/assets/Vector.png';
import { toast } from 'react-toastify';



const Card = ({ data, setSelectedProducts, selectedProducts, cart, setCart }) => {

  const handleBuyNow = () => {
    setbuy(false);
    toast.success(`${data.name} is Successfuly added to Cart`);
    setSelectedProducts([...selectedProducts, data]);
    setCart(selectedProducts.length);
  }

  const [buy, setbuy] = useState(true);

  return (
    <div className="border border-gray-200 p-5 rounded-3xl hover:transition-all hover:duration-300 hover:shadow-xl hover:ease-in-out hover:-translate-y-2 space-y-3.5">
      <div>
        <div className="text-right text-red-500 text-md">
          <p
            className={`px-2.5 py-2 rounded-3xl inline-block ${
              data.tag === 'Popular'
                ? 'bg-[#e0e7ff] text-blue-500'
                : data.tag === 'New'
                  ? 'bg-[#dcfce8] text-green-500'
                  : data.tag === 'Best seller'
                    ? 'bg-[#fff4c7] text-red-500'
                    : 'bg-gray-200'
            }`}>
            {data.tag}
          </p>
        </div>
        <div className="p-3 border border-gray-300 inline-block rounded-full bg-[#f5f5f5]">
          <img className="h-6 w-6" src={data.icon} alt="" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">{data.name}</h1>
      <p className="text-gray-500">{data.description}</p>
      <p>
        <span className="text-3xl font-bold">${data.price}</span>/{data.period}
      </p>
      <div>
        {data.features.map((list) => (
          <li className="flex items-center gap-1">
            <img
              className="h-[15px] w-[15px]"
              src={CheckImg}
              alt="Check Image"
            />
            <p className="text-gray-500">{list}</p>
          </li>
        ))}
      </div>
      <button
        disabled={!buy}
        onClick={() => handleBuyNow()}
        class={`btn btn-primary w-full ${buy ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-gray-300 border-gray-300'}  rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out mt-6`}>
        <span className={`${buy ? 'text-white' : 'text-blue-500'}`}>
          {buy ? "Buy Now" : "Go to Cart"}
        </span>
      </button>
    </div>
  );
};

export default Card;
