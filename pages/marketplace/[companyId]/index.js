import { useRouter } from 'next/router';
import { getCompanies, getCompanyById } from '../../../utils/Fauna';
import CompanyProfile from '../../../components/company/CompanyProfile';

const CompanyProfilePage = () => {
  const router = useRouter();

  // const companyId = router.query.companyId; // Send request to backend API to fetch companies with companyId

  return (
    <div>
      <CompanyProfile
        email='jdoe@example.com'
        company='Johns Pot'
        city='Manhattan'
        state='New York'
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

  console.log('SELECTED COMPANY:', selectedCompany);
  console.log('ID:', companyId);

  return {
    props: {
      companyData: selectedCompany,
    },
  };
}

export default CompanyProfilePage;
