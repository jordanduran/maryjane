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
          street={company.street}
          city={company.city}
          state={company.state}
          zipcode={company.zipcode}
          company={company.company}
          companyEmail={company.companyEmail}
          name={company.name}
          phone={company.phone}
        />
      ))}
    </ul>
  );
};

export default CompanyList;
