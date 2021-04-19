import { useContext } from 'react';
import { useRouter } from 'next/router';
import { getProducts, getProductById } from '../../../../../utils/Fauna';
import AlertContext from '../../../../../store/AlertContext';
import EditProductForm from '../../../../../components/product/EditProductForm';

const UpdateProductPage = (props) => {
  const router = useRouter();
  const { showAlert } = useContext(AlertContext);

  const updateProductHandler = async (enteredUpdatedProductData) => {
    const response = await fetch('/api/update-product', {
      method: 'PUT',
      body: JSON.stringify(enteredUpdatedProductData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      router.back();
      showAlert({
        title: 'Successful update of product.',
        message: `You have successfully updated this product.`,
        status: 'success',
      });
    } else if (!response.ok) {
      showAlert({
        title: 'Unsuccessful update of product',
        message:
          data.message ||
          'Sorry, but your product cannot be updated at this time.',
      });
    }
  };

  return (
    <div className='px-4 py-5 sm:p-6 md:ml-6 md:mr-6 confetti-bg'>
      <EditProductForm
        product={props.product}
        onUpdateProductHandler={updateProductHandler}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { companyId: product.data.companyId.id, productId: product.id },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const selectedProduct = await getProductById(productId);

  return {
    props: {
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

export default UpdateProductPage;
