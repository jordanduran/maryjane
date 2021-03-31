import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-green-500 tracking-wide uppercase'>
            Welcome to the
          </h2>
          <p className='mt-1 text-4xl font-extrabold text-gray-700 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            MARKETPLACE
          </p>
          <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
            Browse our available stores, we partner with nothing but the best
            and highest of quality cannabis distributors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
