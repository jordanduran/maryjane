import { Fragment, useEffect, useContext } from 'react';
import { getCompanies } from '../../utils/Fauna';
import CompanyList from '../../components/company/CompanyList';
import Hero from '../../components/marketplace/Hero';
import { UserContext } from '../../store/userContext';

const MarketplacePage = (props) => {
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  }, [loggedInUser]);

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

  console.log(
    'COMPANIES:',
    companies.map((company) => company.data)
  );

  return {
    props: {
      companies: companies.map((company) => ({
        userId: company.data.userId.id,
        key: company.id,
        id: company.id,
        country: company.data.country,
        street: company.data.address.street,
        city: company.data.address.city,
        state: company.data.address.state,
        zipcode: company.data.address.zipcode,
        company: company.data.company,
        companyEmail: company.data.companyEmail,
        name: company.data.name,
        phone: company.data.phone,
      })),
    },
    revalidate: 1,
  };
}

export default MarketplacePage;
