import CompanyItem from './CompanyItem';

const CompanyList = (props) => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'
    >
      {props.companies.map((company) => (
        <CompanyItem
          key={company.id}
          id={company.id}
          country={company.data.country}
          street={company.data.address.street}
          city={company.data.address.city}
          state={company.data.address.state}
          zipcode={company.data.address.zipcode}
          company={company.data.company}
          companyEmail={company.data.companyEmail}
          name={company.data.name}
          email={company.data.email}
          phone={company.data.phone}
        />
      ))}
    </ul>
  );
};

export default CompanyList;
