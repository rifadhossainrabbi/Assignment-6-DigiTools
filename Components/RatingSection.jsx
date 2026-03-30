import React from 'react';

const RatingSection = () => {
  return (
    <div className="w-full my-[50px] min-h-[20vh] bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="w-11/12 mx-auto flex justify-around items-center py-14 text-white">
        
    
        <div className="flex flex-col items-center flex-1">
          <h1 className="text-5xl">50K+</h1>
          <p className="mt-3.5 text-gray-200">Active Users</p>
        </div>

        <div className="h-[50px] w-[1px] bg-white mx-6"></div>


        <div className="flex flex-col items-center flex-1">
          <h1 className="text-5xl">200+</h1>
          <p className="mt-3.5 text-gray-200">Premium Tools</p>
        </div>


        <div className="h-[50px] w-[1px] bg-white mx-6"></div>


        <div className="flex flex-col items-center flex-1">
          <h1 className="text-5xl">4.9</h1>
          <p className="mt-3.5 text-gray-200">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
