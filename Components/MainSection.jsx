import React, { use } from 'react';
import CheckImg from '../src/assets/Vector.png';

const MainSection = ({ data }) => {
  const useData = use(data);
  console.log(useData);
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

      {/* Main part */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {useData.map((data) => (
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
                <img className="h-8 w-8" src={data.icon} alt="" />
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
                  <p className='text-gray-500'>{list}</p>
                </li>
              ))}
            </div>
            <button class="btn btn-primary w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out mt-6">
              <span className="text-white">Buy Now</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
