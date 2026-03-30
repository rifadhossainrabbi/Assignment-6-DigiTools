import React from 'react';
import FooterImg from '../src/assets/DigiToolsFooter.png';
import { TbBrandInstagramFilled } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white py-10 text-center md:text-left">
      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-5 justify-between gap-5 md:gap-14 text-center md:text-left">
        <div>
          <img
            className="w-[180px] mx-auto md:mx-0 mb-4"
            src={FooterImg}
            alt=""
          />
          <div>
            <p className="text-gray-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
        </div>

        <nav className="w-10/12 mx-auto md:w-auto md:mx-0">
          <h6 className="text-white text-2xl font-semibold mb-3.5">Product</h6>
          <div className="flex flex-col space-y-3">
            <a className="text-gray-300 hover:underline">Features</a>
            <a className="text-gray-300 hover:underline">Pricing</a>
            <a className="text-gray-300 hover:underline">Templates</a>
            <a className="text-gray-300 hover:underline">Integrations</a>
          </div>
        </nav>
        <nav className="w-10/12 mx-auto md:w-auto md:mx-0">
          <h6 className="text-white text-2xl font-semibold mb-3.5">Company</h6>
          <div className="flex flex-col space-y-3">
            <a className="text-gray-300 hover:underline">About</a>
            <a className="text-gray-300 hover:underline">Blog</a>
            <a className="text-gray-300 hover:underline">Careers</a>
            <a className="text-gray-300 hover:underline">Press</a>
          </div>
        </nav>
        <nav className="w-10/12 mx-auto md:w-auto md:mx-0">
          <h6 className="text-white text-2xl font-semibold mb-3.5">
            Resources
          </h6>
          <div className="flex flex-col space-y-3">
            <a className="text-gray-300 hover:underline">Documentation</a>
            <a className="text-gray-300 hover:underline">Help Center</a>
            <a className="text-gray-300 hover:underline">Community</a>
            <a className="text-gray-300 hover:underline">Contact</a>
          </div>
        </nav>
        <nav className="w-10/12 mx-auto md:w-auto md:mx-0">
          <h6 className="text-white text-2xl font-semibold mb-3.5">
            Social Links
          </h6>
          <div className="flex gap-2.5">
            <div className="p-3 bg-white rounded-full hover:cursor-pointer">
              <TbBrandInstagramFilled className="text-black text-xl " />
            </div>
            <div className="p-3 bg-white rounded-full hover:cursor-pointer">
              <FaFacebook className="text-black text-xl" />
            </div>
            <div className="p-3 bg-white rounded-full hover:cursor-pointer">
              <FaXTwitter className="text-black text-xl" />
            </div>
          </div>
        </nav>
      </div>

      <hr className="mb-8 mt-16 w-9/12 mx-auto border-t-2 border-gray-600" />

      <div className="flex justify-between max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto">
        <div>
          <p className="text-gray-300">
            © 2026 Digitools. All rights reserved.
          </p>
        </div>
        <div className="flex gap-3">
          <span>
            <p className="text-gray-300">Privecy Policy</p>
          </span>
          <span>
            <p className="text-gray-300">Terms of Services</p>
          </span>
          <span>
            <p className="text-gray-300">Cookies</p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;