import { useRouter } from 'next/router';

const CompanyPage = () => {
  const router = useRouter();

  const companyId = router.query.companyId;

  // Send request to backend API to fetch companies with companyId

  return (
    <div>
      <h1>Company Page</h1>
    </div>
  );
};

export default CompanyPage;
