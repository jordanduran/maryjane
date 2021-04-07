import { getCompanies, getCompanyById } from '../../../../utils/Fauna';
import { useRouter } from 'next/router';
import Product from '../../../../components/product/Product';

const ProductPage = () => {
  const router = useRouter();

  // const companyId = router.query.companyId;

  return (
    <div>
      <Product />
    </div>
  );
};

export async function getStaticPaths() {
  const companies = await getCompanies();

  console.log(
    'COMPANIES:',
    companies.map((company) => company.id)
  );

  // Map over products and return productId in paths along with companyId

  return {
    fallback: false,
    paths: companies.map((company) => ({
      params: { companyId: company.id, productId: 'p1' },
    })),
  };
}

export async function getStaticProps(context) {
  const companyId = context.params.companyId;

  const selectedCompany = await getCompanyById(companyId);

  console.log('SELECTED COMPANY:', selectedCompany);

  return {
    props: {
      companyData: {
        id: companyId,
        userId: selectedCompany.userId.id,
        name: selectedCompany.name,
        company: selectedCompany.company,
        companyEmail: selectedCompany.companyEmail,
        country: selectedCompany.country,
        street: selectedCompany.address.street,
        city: selectedCompany.address.city,
        state: selectedCompany.address.state,
        zipcode: selectedCompany.address.zipcode,
      },
      // products: DUMMY_PRODUCTS,
    },
    revalidate: 1,
  };
}

export default ProductPage;
