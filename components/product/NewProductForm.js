import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import ImageUpload from '../form/ImageUpload';

const NewProductForm = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  const productTypeInputRef = useRef();
  const productNameInputRef = useRef();
  const pricePerGramInputRef = useRef();
  const pricePerEighthInputRef = useRef();
  const pricePerQuarterInputRef = useRef();
  const pricePerHalfInputRef = useRef();
  const pricePerOunceInputRef = useRef();
  const verifyEmailInputRef = useRef();

  const AddNewProduct = async (
    productName,
    productType,
    // productImage,
    gram,
    quarter,
    half,
    ounce,
    email
  ) => {
    const response = await fetch('/api/auth/new-product', {
      method: 'POST',
      body: JSON.stringify({
        productType,
        productName,
        gram,
        quarter,
        half,
        ounce,
        // productImage,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredProductType = productTypeInputRef.current.value;
    const enteredProductName = productNameInputRef.current.value;
    const enteredProductPricePerGram = pricePerGramInputRef.current.value;
    const enteredProductPricePerEighth = pricePerEighthInputRef.current.value;
    const enteredProductPricePerQuarter = pricePerQuarterInputRef.current.value;
    const enteredProductPricePerHalf = pricePerHalfInputRef.current.value;
    const enteredProductPricePerOunce = pricePerOunceInputRef.current.value;
    const enteredVerifiedEmail = verifyEmailInputRef.current.value;

    try {
      const result = await AddNewProduct(
        enteredProductName,
        enteredProductType,
        enteredProductPricePerGram,
        enteredProductPricePerEighth,
        enteredProductPricePerQuarter,
        enteredProductPricePerHalf,
        enteredProductPricePerOunce,
        enteredVerifiedEmail
      );

      console.log(result);
      router.back();

      productTypeInputRef = '';
      productNameInputRef = '';
      pricePerGramInputRef = '';
      pricePerEighthInputRef = '';
      pricePerQuarterInputRef = '';
      pricePerHalfInputRef = '';
      pricePerOunceInputRef = '';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action='#' method='POST' onSubmit={submitHandler}>
      <div className='shadow sm:rounded-lg sm:overflow-hidden'>
        <div className='confetti-bg bg-gray-50 py-6 px-4 space-y-6 sm:p-6'>
          <div>
            <h3 className='text-lg leading-6 font-medium text-gray-800'>
              Add new product to your inventory
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
                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
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
                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
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
                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
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
                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
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
                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
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
                htmlFor='productName'
                className='block text-sm font-medium text-gray-700'
              >
                Verify Email
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='email'
                  ref={verifyEmailInputRef}
                  id='email'
                  value={session.user.email}
                  className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  placeholder='you@example.com'
                  readOnly
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
            Add to Inventory
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewProductForm;
