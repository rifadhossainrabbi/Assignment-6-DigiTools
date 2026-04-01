import React from 'react';

const TransformWorkflow = () => {
  return (
    <div className="p-14 md:p-32 flex justify-center items-center text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="space-y-5">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Ready to Transform Your Workflow?
          </h1>
          <p>
            Join thousands of professionals who are already using Digitools to
            work smarter. <br className="hidden md:flex" /> Start your free
            trial today.
          </p>
        </div>
        <div className="text-center flex gap-4 justify-center">
          <button className="btn rounded-3xl">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>
          <button className="btn btn-outline btn-primary bg-transparent border border-gray-200 rounded-3xl">
            <span className="text-white">View Pricing</span>
          </button>
        </div>
        <div className="text-center">
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default TransformWorkflow;