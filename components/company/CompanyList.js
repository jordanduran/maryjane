import React from 'react';
import CompanyItem from './CompanyItem';

const CompanyList = () => {
  return (
    <ul
      role='list'
      class='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'
    >
      <CompanyItem />
    </ul>
  );
};

export default CompanyList;
