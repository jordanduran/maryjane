import { Fragment } from 'react';
import CompanyList from '../../components/company/CompanyList';
import Hero from '../../components/marketplace/Hero';

const DUMMY_COMPANIES = [
  {
    id: 'c1',
    name: 'John Doe',
    phone: '1234567890',
    email: 'jdoe@example.com',
    company: 'Johns Pot',
    companyEmail: 'john@company.com',
    country: 'United States',
    address: {
      street: '123 Sunnyside Lane',
      city: 'New York',
      state: 'NY',
      zipcode: '10023',
    },
  },
  {
    id: 'c2',
    name: 'Jim Halpert',
    phone: '1234567890',
    email: 'jim@example.com',
    company: 'Jims Pot',
    companyEmail: 'jim@company.com',
    country: 'United States',
    address: {
      street: '234 Sunnyside Lane',
      city: 'Queens',
      state: 'New York',
      zipcode: '10001',
    },
  },
  {
    id: 'c3',
    name: 'Mary Lou',
    phone: '1234567890',
    email: 'mary@example.com',
    company: 'Mary Pot',
    companyEmail: 'mary@company.com',
    country: 'United States',
    address: {
      street: '345 Sunnyside Lane',
      city: 'Brooklyn',
      state: 'New York',
      zipcode: '10045',
    },
    companyLogo: 'img',
  },
];

const MarketplacePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <div className='max-w-5xl md:max-w-4xl lg:max-w-7xl mx-auto'>
        <CompanyList companies={props.companies} />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  // Fetch data from API

  return {
    props: {
      companies: DUMMY_COMPANIES,
    },
    revalidate: 1,
  };
}

export default MarketplacePage;
