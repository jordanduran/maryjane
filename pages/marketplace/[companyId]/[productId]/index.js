import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();

  // console.log(router.query.productId);

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default ProductPage;
