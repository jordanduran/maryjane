import { useRouter } from 'next/router';
import CompanyProfile from '../../../components/company/CompanyProfile';

const CompanyProfilePage = () => {
  const router = useRouter();

  const companyId = router.query.companyId;

  // Send request to backend API to fetch companies with companyId

  return (
    <div>
      <h1>Company Page</h1>
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
  return {
    fallback: false,
    paths: [
      {
        params: {
          companyId: 'c1',
        },
        params: {
          companyId: 'c2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetch data for single company

  const companyId = context.params.companyId;
  console.log(companyId);

  return {
    props: {
      companyData: {
        id: companyId,
        email: 'jdoe@example.com',
        company: 'Johns Pot',
        city: 'Manhattan',
        state: 'New York',
        street: '123 Sunnyside Lane',
      },
    },
  };
}

export default CompanyProfilePage;
