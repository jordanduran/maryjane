import { useRouter } from 'next/router';
import Product from '../../../../components/product/Product';

const ProductPage = () => {
  const router = useRouter();

  // const companyId = router.query.companyId;
  
  return (
    <div>
      <Product id='p1' />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          productId: '/p1',
        },
        params: {
          productId: 'p2',
        },
        params: {
          productId: 'p3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const companyId = context.params.companyId;

  // Fetch data for single product

  return {
    props: {
      productData: {
        companyId: companyId,
        id: productId,
      },
    },
  };
}

export default ProductPage;
