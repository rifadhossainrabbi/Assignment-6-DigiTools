import React from 'react';
import UserImg from '../src/assets/user.png';
import PackageImg from '../src/assets/package.png';
import RocketImg from '../src/assets/rocket.png';

const StartedSection = () => {
  return (
    <div className="w-full bg-[#F9FAFC] py-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Get Started in 3 Steps</h1>
        <p className="text-gray-500 mt-5">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-5 md:gap-16 my-10">
        <div className="card bg-base-100 shadow-sm p-3 rounded-2xl w-full max-w-sm">
          <p className="text-right text-white">
            <span className="p-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              01
            </span>
          </p>

          <figure className="px-10 pt-10">
            <div className="p-4 rounded-full bg-[#f4e8ff]">
              <img src={UserImg} alt="User Image" className="w-12 h-12" />
            </div>
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm p-3 rounded-2xl w-full max-w-sm">
          <p className="text-right text-white">
            <span className="p-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              02
            </span>
          </p>

          <figure className="px-10 pt-10">
            <div className="p-4 rounded-full bg-[#f4e8ff]">
              <img src={PackageImg} alt="Package Image" className="w-12 h-12" />
            </div>
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Choose Products</h2>
            <p className="text-[#627382]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm p-3 rounded-2xl w-full max-w-sm">
          <p className="text-right text-white">
            <span className="p-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              03
            </span>
          </p>

          <figure className="px-10 pt-10">
            <div className="p-4 rounded-full bg-[#f4e8ff]">
              <img src={RocketImg} alt="Rocket Image" className="w-12 h-12" />
            </div>
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Start Creating</h2>
            <p className="text-[#627382]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartedSection; 