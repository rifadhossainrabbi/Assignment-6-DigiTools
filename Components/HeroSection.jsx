import React from 'react';
import CircleImg from '../src/assets/circle.png';
import BannerImg from '../src/assets/banner.png';
import { CiPlay1 } from 'react-icons/ci';

const HeroSection = () => {
  return (
    <div className="min-w-full min-h-[30vh] mt-[85px]">
      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-[60px]">
        <img
          src={BannerImg}
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-2xl"
        />

        <div className="text-center md:text-left lg:text-left">
          <p className="inline-flex px-3 py-1.5 rounded-3xl items-center gap-2 bg-[#E1E7FF]">
            <img className="w-[17px] h-[17px]" src={CircleImg} alt="" />
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </p>

          <h1 className="text-3xl md:text-6xl font-bold mt-4">
            Supercharge Your <br className="hidden md:flex lg:flex" /> Digital
            Workflow!
          </h1>

          <p className="py-6 text-gray-600">
            Access premium AI tools, design assets, templates, and productivity
            <br className="hidden md:flex lg:flex" />
            software—all in one place. Start creating faster today.
            <br className="hidden md:flex lg:flex" /> Explore Products
          </p>

          <button
            type="button"
            className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out">
            Explore Products
          </button>

          <button
            type="button"
            className="btn ml-2 border border-[#9514FA] rounded-3xl bg-white transition-transform hover:-translate-y-2 duration-300 ease-in-out">
            <span>
              <CiPlay1 />
            </span>
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
