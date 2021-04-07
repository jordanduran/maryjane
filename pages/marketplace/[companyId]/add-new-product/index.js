import { useContext } from 'react';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import AlertContext from '../../../../store/AlertContext';
import NewProductForm from '../../../../components/product/NewProductForm';

const AddNewProductPage = () => {
  const router = useRouter();
  const { showAlert } = useContext(AlertContext);

  const addNewProductHandler = async (enteredProductData) => {
    const response = await fetch('/api/new-product', {
      method: 'POST',
      body: JSON.stringify(enteredProductData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      router.back();
      showAlert({
        title: 'Successful new product.',
        message: `You have successfully added a new product to your inventory.`,
        status: 'success',
      });
    } else if (!response.ok) {
      showAlert({
        title: 'Partnership application already in database',
        message:
          data.message ||
          'Sorry, but your product cannot be added to your inventory at this time.',
      });
    }

    console.log(data);
  };

  return (
    <div className='px-4 py-5 sm:p-6 md:ml-6 md:mr-6 confetti-bg'>
      <NewProductForm onAddNewProductHandler={addNewProductHandler} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AddNewProductPage;
