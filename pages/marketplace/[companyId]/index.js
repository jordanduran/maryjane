import {
  getCompanies,
  getCompanyById,
  getProducts,
  getProductsByCompanyId,
} from '../../../utils/Fauna';
import CompanyProfile from '../../../components/company/CompanyProfile';

const DUMMY_PRODUCTS = [
  {
    productId: 'p1',
    productName: 'Strawberry Kush',
    productType: 'Sativa',
    productImage:
      'https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    productPrice: {
      gram: {
        gramPrice: '25',
        gramQty: '2',
      },
      eighth: {
        eighthPrice: '25',
        eighthQty: '2',
      },
      quarter: {
        quarterPrice: '50',
        quarterQty: '3',
      },
      half: {
        halfPrice: '100',
        halfQty: '4',
      },
      ounce: {
        ouncePrice: '200',
        ounceQty: '8',
      },
    },
  },
  {
    productId: 'p2',
    productName: 'Purple Haze',
    productType: 'Indica',
    productImage:
      'https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    productPrice: {
      gram: {
        gramPrice: '25',
        gramQty: '2',
      },
      eighth: {
        eighthPrice: '25',
        eighthQty: '0',
      },
      quarter: {
        quarterPrice: '50',
        quarterQty: '1',
      },
      half: {
        halfPrice: '100',
        halfQty: '1',
      },
      ounce: {
        ouncePrice: '200',
        ounceQty: '2',
      },
    },
  },
  {
    productId: 'p3',
    productName: 'Mimosa Cookies',
    productType: 'Hybrid',
    productImage:
      'https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    productPrice: {
      gram: {
        gramPrice: '25',
        gramQty: '0',
      },
      eighth: {
        eighthPrice: '25',
        eighthQty: '0',
      },
      quarter: {
        quarterPrice: '50',
        quarterQty: '0',
      },
      half: {
        halfPrice: '100',
        halfQty: '0',
      },
      ounce: {
        ouncePrice: '200',
        ounceQty: '0',
      },
    },
  },
];

const CompanyProfilePage = (props) => {
  // const companyId = router.query.companyId; // Send request to backend API to fetch companies with companyId
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

export async function getStaticPaths() {
  const products = await getProducts();

  console.log(
    'PRODUCTS:',
    products.map((product) => product)
  );

  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { companyId: product.data.companyId.id, productId: product.id },
    })),
  };
}

export async function getStaticProps(context) {
  const companyId = context.params.companyId;

  const selectedCompany = await getCompanyById(companyId);

  console.log('SELECTED COMPANY:', selectedCompany);

  const selectedCompanyProducts = await getProductsByCompanyId(companyId);

  console.log('COMPANY PRODUCTS:', selectedCompanyProducts);

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
      products: selectedCompanyProducts.map((product) => ({
        productId: product.id,
        productType: product.data.productType,
        productName: product.data.productName,
        productCompanyId: product.data.companyId.id,
        gram: {
          gramPrice: product.data.gram.gramPrice || '',
          gramQty: product.data.gram.gramQty || '',
        },
        eighth: {
          eighthPrice: product.data.eighth.eighthPrice || '',
          eighthQty: product.data.eighth.eighthQty || '',
        },
        quarter: {
          quarterPrice: product.data.quarter.quarterPrice || '',
          quarterQty: product.data.quarter.quarterQty || '',
        },
        half: {
          halfPrice: product.data.half.halfPrice || '',
          halfQty: product.data.half.halfQty || '',
        },
        ounce: {
          ouncePrice: product.data.ounce.ouncePrice || '',
          ounceQty: product.data.ounce.ounceQty || '',
        },
        productImage:
          product.data.productImage ||
          'https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      })),
    },
    revalidate: 1,
  };
}

export default CompanyProfilePage;
