import React from 'react';
import CompanyList from '../../components/company/CompanyList';
import Hero from '../../components/marketplace/Hero';

const MarketPlacePage = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 sm:px-4 lg:px-8 confetti-bg'>
      <Hero />
      <div className='max-w-5xl mx-auto'>
        <CompanyList />
      </div>
    </div>
  );
};

export default MarketPlacePage;
