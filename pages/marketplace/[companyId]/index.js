import { useRouter } from 'next/router';
import { getCompanies, getCompanyById } from '../../../utils/Fauna';
import CompanyProfile from '../../../components/company/CompanyProfile';

const CompanyProfilePage = (props) => {
  const router = useRouter();

  // const companyId = router.query.companyId; // Send request to backend API to fetch companies with companyId

  return (
    <div>
      <CompanyProfile
        name={props.companyData.name}
        company={props.companyData.company}
        companyEmail={props.companyData.companyEmail}
        country={props.companyData.country}
        street={props.companyData.street}
        city={props.companyData.city}
        state={props.companyData.state}
        zipcode={props.companyData.zipcode}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const companies = await getCompanies();

  return {
    fallback: false,
    paths: companies.map((company) => ({ params: { companyId: company.id } })),
  };
}

export async function getStaticProps(context) {
  const companyId = context.params.companyId;

  const selectedCompany = await getCompanyById(companyId);

  return {
    props: {
      companyData: {
        name: selectedCompany.name,
        company: selectedCompany.company,
        companyEmail: selectedCompany.companyEmail,
        country: selectedCompany.country,
        street: selectedCompany.address.street,
        city: selectedCompany.address.city,
        state: selectedCompany.address.state,
        zipcode: selectedCompany.address.zipcode,
      },
    },
  };
}

export default CompanyProfilePage;
