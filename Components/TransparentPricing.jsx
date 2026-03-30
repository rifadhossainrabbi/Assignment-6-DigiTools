import React from 'react';
import CheckImg from '../src/assets/Vector.png';

const TransparentPricing = () => {
  return (
    <div className="my-36">
      <div>
        <h1 className="text-center text-5xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-[#627382] mt-5">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Card er Parent div */}
        <div className="max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          <div className="border border-gray-300 p-4 rounded-2xl flex flex-col">
            <div className="flex-1">
              <div>
                <h1 className="text-2xl font-bold">Starter</h1>
                <p className="text-[#627382]">Perfect for getting started</p>
              </div>

              <p className="my-7">
                <span className="text-3xl font-bold">$0</span>/Month
              </p>

              <ul>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Basic templates</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Community support</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>1 project per month</p>
                </li>
              </ul>
            </div>

            <button class="btn btn-primary w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out mt-6">
              <span className="text-white">Get Started Free</span>
            </button>
          </div>

          <div className="relative bg-linear-to-r text-white from-[#4F39F6] to-[#9514FA] border border-gray-300 p-4 rounded-2xl flex flex-col">
            {/* Badge */}
            <div className="bg-[#fff4c7] px-2.5 py-2.5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl">
              <p className="text-red-500">Most Popular</p>
            </div>

            <div className="flex-1">
              <div>
                <h1 className="text-2xl font-bold">Pro</h1>
                <p className="text-[#9db2c5] font-medium">
                  Best for professionals
                </p>
              </div>

              <p className="my-7">
                <span className="text-3xl font-bold">$0</span>/Month
              </p>

              <ul>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Access to all premium tools</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Unlimited templates</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Priority support</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Unlimited projects</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Cloud sync</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Advanced analytics</p>
                </li>
              </ul>
            </div>
            <button class="btn btn-primary w-full bg-white border-none rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out mt-6">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Start Pro Trial
              </span>
            </button>
          </div>

          <div className="border border-gray-300 p-4 rounded-2xl flex flex-col">
            <div className="flex-1">
              <div>
                <h1 className="text-2xl font-bold">Enterprise</h1>
                <p className="text-[#627382]">For teams and businesses</p>
              </div>

              <p className="my-7">
                <span className="text-3xl font-bold">$99</span>/Month
              </p>

              <ul>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Everything in Pro</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Team collaboration</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Custom integrations</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Dedicated support</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>SLA guarantee</p>
                </li>
                <li className="flex items-center gap-1">
                  <img className="h-[15px] w-[15px]" src={CheckImg} alt="" />
                  <p>Custom branding</p>
                </li>
              </ul>
            </div>

            <button class="btn btn-primary w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl transition-transform hover:-translate-y-2 duration-300 ease-in-out mt-6">
              <span className="text-white">Get Started Free</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;
