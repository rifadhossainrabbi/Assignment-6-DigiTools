import React from 'react';

const RatingSection = () => {
  return (
    <div className="w-full mt-[50px] min-h-[20vh] bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto flex flex-col md:flex-row justify-center items-center py-8 md:py-14 text-white gap-10 md:gap-32">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">50K+</h1>
          <p className="mt-2 md:mt-3.5 text-gray-200">Active Users</p>
        </div>

        <div className="hidden md:block md:h-14 md:w-[1px] md:bg-gray-300 md:mx-6"></div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text font-bold">200+</h1>
          <p className="mt-2 md:mt-3.5 text-gray-200">Premium Tools</p>
        </div>

        <div className="hidden md:block md:h-14 md:w-[1px] md:bg-gray-300 md:mx-6"></div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text font-bold">4.9</h1>
          <p className="mt-2 md:mt-3.5 text-gray-200">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
