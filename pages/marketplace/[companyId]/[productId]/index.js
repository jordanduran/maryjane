import {
  getProducts,
  getProductById,
  getCompanyById,
} from '../../../../utils/Fauna';
import Product from '../../../../components/product/Product';

const ProductPage = (props) => {
  return (
    <div className='confetti-bg'>
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
        productImage:
          selectedProduct.productImage ||
          'https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      },
    },
    revalidate: 1,
  };
}

export default ProductPage;
