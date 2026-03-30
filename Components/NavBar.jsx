import React from 'react';
import NavImg from '../src/assets/DigiToolsNav.png';

const NavBar = () => {
  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto">
        {/* Logo and Menu holo navbar-start er moddhe */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg> 
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <img className="w-[180px] h-[40px]" src={NavImg} alt="Navbar Image" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-3.5">
            <li className="hover:text-blue-600 hover:underline">
              <a href="">Products</a>
            </li>
            <li className="hover:text-blue-600 hover:underline">
              <a href="">Features</a>
            </li>
            <li className="hover:text-blue-600 hover:underline">
              <a href="">Pricing</a>
            </li>
            <li className="hover:text-blue-600 hover:underline">
              <a href="">Testimonials</a>
            </li>
            <li className="hover:text-blue-600 hover:underline">
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Sokol button navbar-end er moddhe */}
        <div className="navbar-end flex  gap-4">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{' '}
              </svg>
              <span className="badge text-red-500 text-xl font-bold badge-sm indicator-item">
                8
              </span>
            </div>
          </div>

          <button className="btn border-0 bg-white text-xl font-semibold shadow-none">
            Log In
          </button>
          <button class="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
