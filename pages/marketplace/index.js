import { Fragment } from 'react';
import { getCompanies } from '../../utils/Fauna';
import CompanyList from '../../components/company/CompanyList';
import Hero from '../../components/marketplace/Hero';

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
  const companies = await getCompanies();

  console.log('ALL COMPANIES IN MARKETPLACE:', companies.data);

  return {
    props: {
      companies: companies,
    },
    revalidate: 1,
  };
}

export default MarketplacePage;
