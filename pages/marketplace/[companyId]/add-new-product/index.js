import NewProductForm from '../../../../components/product/NewProductForm';

const AddNewProductPage = () => {
  const addNewProductHandler = () => {};

  return (
    <div className='px-4 py-5 sm:p-6 md:ml-6 md:mr-6 confetti-bg'>
      <NewProductForm onAddNewProductHandler={addNewProductHandler} />
    </div>
  );
};

export default AddNewProductPage;
