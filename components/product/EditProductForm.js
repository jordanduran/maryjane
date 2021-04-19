import { useRef, useContext } from 'react';
import { useSession } from 'next-auth/client';
import { UserContext } from '../../store/userContext';
import ImageUpload from '../form/ImageUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCannabis,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const EditProductForm = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const [session, loading] = useSession();

  console.log(props);

  const productTypeInputRef = useRef();
  const productNameInputRef = useRef();
  const pricePerGramInputRef = useRef();
  const gramQtyInputRef = useRef();
  const pricePerEighthInputRef = useRef();
  const eighthQtyInputRef = useRef();
  const pricePerQuarterInputRef = useRef();
  const quarterQtyInputRef = useRef();
  const pricePerHalfInputRef = useRef();
  const halfQtyInputRef = useRef();
  const pricePerOunceInputRef = useRef();
  const ounceQtyInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredProductType = productTypeInputRef.current.value;
    const enteredProductName = productNameInputRef.current.value;
    const enteredProductPricePerGram = pricePerGramInputRef.current.value;
    const enteredGramQty = gramQtyInputRef.current.value;
    const enteredProductPricePerEighth = pricePerEighthInputRef.current.value;
    const enteredEighthQty = eighthQtyInputRef.current.value;
    const enteredProductPricePerQuarter = pricePerQuarterInputRef.current.value;
    const enteredQuarterQty = quarterQtyInputRef.current.value;
    const enteredProductPricePerHalf = pricePerHalfInputRef.current.value;
    const enteredHalfQty = halfQtyInputRef.current.value;
    const enteredProductPricePerOunce = pricePerOunceInputRef.current.value;
    const enteredOunceQty = ounceQtyInputRef.current.value;

    try {
      const productData = {
        productId: props.product.productId,
        productType: enteredProductType,
        productName: enteredProductName,
        gram: {
          gramPrice: enteredProductPricePerGram,
          gramQty: enteredGramQty,
        },
        eighth: {
          eighthPrice: enteredProductPricePerEighth,
          eighthQty: enteredEighthQty,
        },
        quarter: {
          quarterPrice: enteredProductPricePerQuarter,
          quarterQty: enteredQuarterQty,
        },
        half: {
          halfPrice: enteredProductPricePerHalf,
          halfQty: enteredHalfQty,
        },
        ounce: {
          ouncePrice: enteredProductPricePerOunce,
          ounceQty: enteredOunceQty,
        },

        email: loggedInUser.email || session.user.email,
        // productImage,
      };

      props.onUpdateProductHandler(productData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action='#' method='PUT' onSubmit={submitHandler}>
      <div className='my-auto overflow-hidden shadow rounded-lg divide-y divide-gray-200 mb-5'>
        <div className='px-4 py-5 sm:p-6'>
          {/* <!-- Content goes here --> */}
          <img
            className='max-h-52 md:max-h-96 md:max-w-screen-md w-full object-cover mx-auto rounded'
            src={props.product.productImage}
          />
        </div>
        <div className='px-4 py-4 sm:px-6'>
          {/* <!-- Content goes here --> */}
          <p className='uppercase font-semibold text-gray-800'>
            <FontAwesomeIcon
              style={{ color: '#059669' }}
              className='fa-1x'
              icon={faCannabis}
            />{' '}
            {props.product.productName}
          </p>
          <p className='uppercase font-semibold text-gray-800'>
            <FontAwesomeIcon
              style={{ color: '#059669' }}
              className='fa-1x'
              icon={faQuestionCircle}
            />{' '}
            {props.product.productType}
          </p>
        </div>
      </div>
      <div className='shadow sm:rounded-lg sm:overflow-hidden'>
        <div className='confetti-bg bg-gray-50 py-6 px-4 space-y-6 sm:p-6'>
          <div>
            <h3 className='text-lg font-bold leading-6 font-medium text-gray-800'>
              Update Product
            </h3>
            {/* <p className='mt-1 text-sm text-gray-500'>
                This information will be displayed publicly so be careful what
                you share.
              </p> */}
          </div>

          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='productType'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Type of Strain
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <select
                  ref={productTypeInputRef}
                  id='productType'
                  name='productType'
                  autoComplete='productType'
                  defaultValue={props.product.productType}
                  className='max-w-lg block focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                >
                  <option>Sativa</option>
                  <option>Indica</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='productName'
                className='block text-sm font-medium text-gray-700'
              >
                Name of Strain
              </label>
              <div className='mt-1'>
                <input
                  ref={productNameInputRef}
                  type='text'
                  name='productName'
                  id='productName'
                  defaultValue={props.product.productName}
                  className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  placeholder='Strawberry Kush'
                />
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='pricePerGram'
                className='block text-sm font-medium text-gray-700'
              >
                Price per Gram
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <span className='text-gray-500 sm:text-sm'>$</span>
                </div>
                <input
                  ref={pricePerGramInputRef}
                  type='text'
                  name='price'
                  id='pricePerGram'
                  defaultValue={
                    props.product.gram.gramPrice
                      ? props.product.gram.gramPrice
                      : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0.00'
                />
                <div className='absolute inset-y-0 right-0 flex items-center'>
                  <label htmlFor='currency' className='sr-only'>
                    Currency
                  </label>
                  <select
                    id='currency'
                    name='currency'
                    className='focus:ring-green-500 focus:border-green-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
                  >
                    <option>USD</option>
                    {/* <option>CAD</option>
                      <option>EUR</option> */}
                  </select>
                </div>
              </div>
            </div>
            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='gramQty'
                className='block text-sm font-medium text-gray-700'
              >
                Quantity of Grams
              </label>
              <div className='w-20 mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
                  </svg>
                </div>
                <input
                  ref={gramQtyInputRef}
                  type='text'
                  name='gramQty'
                  id='gramQty'
                  defaultValue={
                    props.product.gram.gramQty ? props.product.gram.gramQty : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0'
                />
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='price'
                className='block text-sm font-medium text-gray-700'
              >
                Price per Eighth
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <span className='text-gray-500 sm:text-sm'>$</span>
                </div>
                <input
                  ref={pricePerEighthInputRef}
                  type='text'
                  name='pricePerEighth'
                  id='pricePerEighth'
                  defaultValue={
                    props.product.eighth.eighthPrice
                      ? props.product.eighth.eighthPrice
                      : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0.00'
                />
                <div className='absolute inset-y-0 right-0 flex items-center'>
                  <label htmlFor='currency' className='sr-only'>
                    Currency
                  </label>
                  <select
                    id='currency'
                    name='currency'
                    className='focus:ring-green-500 focus:border-green-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
                  >
                    <option>USD</option>
                    {/* <option>CAD</option>
                      <option>EUR</option> */}
                  </select>
                </div>
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='eighthQty'
                className='block text-sm font-medium text-gray-700'
              >
                Quantity of Eighths
              </label>
              <div className='w-20 mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
                  </svg>
                </div>
                <input
                  ref={eighthQtyInputRef}
                  type='text'
                  name='eighthQty'
                  id='eighthQty'
                  defaultValue={
                    props.product.eighth.eighthQty
                      ? props.product.eighth.eighthQty
                      : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0'
                />
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='pricePerQuarter'
                className='block text-sm font-medium text-gray-700'
              >
                Price per Quarter
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <span className='text-gray-500 sm:text-sm'>$</span>
                </div>
                <input
                  ref={pricePerQuarterInputRef}
                  type='text'
                  name='pricePerQuarter'
                  id='pricePerQuarter'
                  defaultValue={
                    props.product.quarter.quarterPrice
                      ? props.product.quarter.quarterPrice
                      : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0.00'
                />
                <div className='absolute inset-y-0 right-0 flex items-center'>
                  <label htmlFor='currency' className='sr-only'>
                    Currency
                  </label>
                  <select
                    id='currency'
                    name='currency'
                    className='focus:ring-green-500 focus:border-green-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
                  >
                    <option>USD</option>
                    {/* <option>CAD</option>
                      <option>EUR</option> */}
                  </select>
                </div>
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='quarterQty'
                className='block text-sm font-medium text-gray-700'
              >
                Quantity of Quarters
              </label>
              <div className='w-20 mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
                  </svg>
                </div>
                <input
                  ref={quarterQtyInputRef}
                  type='text'
                  name='quarterQty'
                  id='quarterQty'
                  defaultValue={
                    props.product.quarter.quarterQty
                      ? props.product.quarter.quarterQty
                      : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0'
                />
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='pricePerHalf'
                className='block text-sm font-medium text-gray-700'
              >
                Price per Half
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <span className='text-gray-500 sm:text-sm'>$</span>
                </div>
                <input
                  type='text'
                  ref={pricePerHalfInputRef}
                  name='pricePerHalf'
                  id='pricePerHalf'
                  defaultValue={
                    props.product.half.halfPrice
                      ? props.product.half.halfPrice
                      : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0.00'
                />
                <div className='absolute inset-y-0 right-0 flex items-center'>
                  <label htmlFor='currency' className='sr-only'>
                    Currency
                  </label>
                  <select
                    id='currency'
                    name='currency'
                    className='focus:ring-green-500 focus:border-green-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
                  >
                    <option>USD</option>
                    {/* <option>CAD</option>
                      <option>EUR</option> */}
                  </select>
                </div>
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='halfQty'
                className='block text-sm font-medium text-gray-700'
              >
                Quantity of Halfs
              </label>
              <div className='w-20 mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
                  </svg>
                </div>
                <input
                  ref={halfQtyInputRef}
                  type='text'
                  name='halfQty'
                  id='halfQty'
                  defaultValue={
                    props.product.half.halfQty ? props.product.half.halfQty : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0'
                />
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='pricePerOunce'
                className='block text-sm font-medium text-gray-700'
              >
                Price per Ounce
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <span className='text-gray-500 sm:text-sm'>$</span>
                </div>
                <input
                  type='text'
                  name='pricePerOunce'
                  ref={pricePerOunceInputRef}
                  defaultValue={
                    props.product.ounce.ouncePrice
                      ? props.product.ounce.ouncePrice
                      : ''
                  }
                  id='priceForOunce'
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0.00'
                />
                <div className='absolute inset-y-0 right-0 flex items-center'>
                  <label htmlFor='currency' className='sr-only'>
                    Currency
                  </label>
                  <select
                    id='currency'
                    name='currency'
                    className='focus:ring-green-500 focus:border-green-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
                  >
                    <option>USD</option>
                    {/* <option>CAD</option>
                      <option>EUR</option> */}
                  </select>
                </div>
              </div>
            </div>

            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='ounceQty'
                className='block text-sm font-medium text-gray-700'
              >
                Quantity of Ounces
              </label>
              <div className='w-20 mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
                  </svg>
                </div>
                <input
                  ref={ounceQtyInputRef}
                  type='text'
                  name='ounceQty'
                  id='ounceQty'
                  defaultValue={
                    props.product.ounce.ounceQty
                      ? props.product.ounce.ounceQty
                      : ''
                  }
                  className='focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                  placeholder='0'
                />
              </div>
            </div>

            <div className='col-span-3'>
              <label className='block text-sm font-medium text-gray-700'>
                High quality photo of the cannabis
              </label>
              <div className='mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center'>
                <div className='space-y-1 text-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 48 48'
                    aria-hidden='true'
                  >
                    <path
                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div className='flex text-sm text-gray-600 text-center'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer bg-gray-100 rounded-md font-medium text-green-400 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500'
                    >
                      <span>Upload a file</span>
                      <p className='pl-1'>or drag and drop</p>
                      <ImageUpload />
                    </label>

                    {/* <p className='pl-1'>or drag and drop</p> */}
                  </div>
                  <p className='text-xs text-gray-500'>PNG, JPG, JPEG</p>
                  {/* <p className='text-xs text-gray-500'>
                    Images will be converted to 208px x 208px{' '}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            type='submit'
            className='bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          >
            Update Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProductForm;
