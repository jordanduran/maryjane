import {
  getCompanies,
  getCompanyById,
  getProductsByCompanyId,
} from '../../../utils/Fauna';
import CompanyProfile from '../../../components/company/CompanyProfile';

const CompanyProfilePage = (props) => {
  return (
    <div>
      <CompanyProfile
        id={props.companyData.id}
        userId={props.companyData.userId}
        name={props.companyData.name}
        company={props.companyData.company}
        companyEmail={props.companyData.companyEmail}
        country={props.companyData.country}
        street={props.companyData.street}
        city={props.companyData.city}
        state={props.companyData.state}
        zipcode={props.companyData.zipcode}
        products={props.products}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const companyId = context.params.companyId;

  const selectedCompany = await getCompanyById(companyId);

  const selectedCompanyProducts = await getProductsByCompanyId(companyId);

  const allCompanies = await getCompanies();

  const allCompanyIds = allCompanies.map((company) => company.id);

  return {
    props: {
      companyData: {
        id: allCompanyIds,
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
      products: selectedCompanyProducts.map((product) => ({
        productId: product.id,
        productType: product.data.productType,
        productName: product.data.productName,
        productCompanyId: product.data.companyId.id,
        gram: {
          gramPrice: product.data.gram.gramPrice || '0',
          gramQty: product.data.gram.gramQty || '0',
        },
        eighth: {
          eighthPrice: product.data.eighth.eighthPrice || '0',
          eighthQty: product.data.eighth.eighthQty || '0',
        },
        quarter: {
          quarterPrice: product.data.quarter.quarterPrice || '0',
          quarterQty: product.data.quarter.quarterQty || '0',
        },
        half: {
          halfPrice: product.data.half.halfPrice || '0',
          halfQty: product.data.half.halfQty || '0',
        },
        ounce: {
          ouncePrice: product.data.ounce.ouncePrice || '0',
          ounceQty: product.data.ounce.ounceQty || '0',
        },
        productImage:
          product.data.productImage ||
          'https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      })),
    },
  };
}

export default CompanyProfilePage;
