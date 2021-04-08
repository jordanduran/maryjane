import {
  getProducts,
  getProductById,
  getCompanyById,
} from '../../../../utils/Fauna';
import Product from '../../../../components/product/Product';

const ProductPage = (props) => {
  return (
    <div>
      <Product companyData={props.companyData} product={props.product} />
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

  // Map over products and return productId in paths along with companyId

  // return {
  //   fallback: false,
  //   paths: companies.map((company) => ({
  //     params: { companyId: company.id, productId: 'p1' },
  //   })),
  // };
}

export async function getStaticProps(context) {
  const companyId = context.params.companyId;
  const productId = context.params.productId;

  const selectedCompany = await getCompanyById(companyId);
  const selectedProduct = await getProductById(productId);

  console.log('SELECTED COMPANY:', selectedCompany);

  console.log('SELECTED PRODUCT:', selectedProduct);

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
      product: {
        productId: productId,
        productType: selectedProduct.productType,
        productName: selectedProduct.productName,
        gram: {
          gramPrice: selectedProduct.gram.gramPrice,
          gramQty: selectedProduct.gram.gramQty,
        },
        eighth: {
          eighthPrice: selectedProduct.eighth.eighthPrice,
          eighthQty: selectedProduct.eighth.eighthQty,
        },
        quarter: {
          quarterPrice: selectedProduct.quarter.quarterPrice,
          quarterQty: selectedProduct.quarter.quarterQty,
        },
        half: {
          halfPrice: selectedProduct.half.halfPrice,
          halfQty: selectedProduct.half.halfQty,
        },
        ounce: {
          ouncePrice: selectedProduct.ounce.ouncePrice,
          ounceQty: selectedProduct.ounce.ounceQty,
        },
      },
    },
    revalidate: 1,
  };
}

export default ProductPage;
