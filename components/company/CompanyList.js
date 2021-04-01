import CompanyItem from './CompanyItem';

const CompanyList = (props) => {
  console.log(props);
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'
    >
      {props.companies.map((company) => (
        <CompanyItem
          key={company.id}
          id={company.id}
          country={company.country}
          street={company.address.street}
          city={company.address.city}
          state={company.address.state}
          zipcode={company.address.zipcode}
          company={company.company}
          companyEmail={company.companyEmail}
          name={company.name}
          email={company.email}
          phone={company.phone}
        />
      ))}
    </ul>
  );
};

export default CompanyList;
