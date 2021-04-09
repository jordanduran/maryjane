import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCannabis,
  faQuestionCircle,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const [gramQty, setGramQty] = useState(0);
  const [eighthQty, setEighthQty] = useState(0);
  const [quarterQty, setQuarterQty] = useState(0);
  const [halfQty, setHalfQty] = useState(0);
  const [ounceQty, setOunceQty] = useState(0);

  const qtyChangeHandler = (event) => {
    const { name, value } = event.target;

    setQtyValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  console.log(props);
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-2'>
      <div className='max-w-3xl mx-auto'>
        <div className='my-auto overflow-hidden shadow rounded-lg divide-y divide-gray-200'>
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
        <div className='text-center'>
          <FontAwesomeIcon
            style={{ color: '#34D399' }}
            className='animate-bounce fa-3x mt-8'
            icon={faChevronCircleDown}
          />{' '}
        </div>
        <div className='flex flex-col'>
          <div className='mt-5 text-center grid grid-cols-1 gap-5 sm:grid-cols-1'>
            {Number(props.product.gram.gramQty) > 0 && (
              <div className='px-4 w-full py-5 shadow rounded-lg overflow-hidden sm:p-6'>
                <span className='text-sm font-medium text-gray-800 truncate'>
                  Total Grams available
                </span>
                <div className='mt-1'>
                  <span className='w-40 mt-1 mr-2 text-3xl font-semibold text-gray-900'>
                    {props.product.gram.gramQty}
                  </span>
                  <div className='mb-2 text-green-700 font-bold'>
                    <span>(${props.product.gram.gramPrice} per gram)</span>
                  </div>
                  <form className='mt-1'>
                    <span className='relative z-0 inline-flex shadow-sm rounded-md'>
                      <button
                        onClick={() => {
                          gramQty > 0 &&
                            setGramQty((prevState) => prevState - 1);
                        }}
                        type='button'
                        className='relative block items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      <input
                        onChange={qtyChangeHandler}
                        value={gramQty}
                        type='text'
                        name='gramQty'
                        id='gramQty'
                        className='text-center w-16 shadow-sm focus:ring-green-500 focus:border-green-500 inline-flex  sm:text-sm border-gray-300'
                      />
                      <button
                        onClick={() => {
                          gramQty < Number(props.product.gram.gramQty) &&
                            gramQty >= 0 &&
                            setGramQty((prevState) => prevState + 1);
                        }}
                        type='button'
                        className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </span>
                    <div>
                      <button
                        type='button'
                        className='block mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                      >
                        Add To Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {Number(props.product.eighth.eighthQty) > 0 && (
              <div className='px-4 w-full py-5 shadow rounded-lg overflow-hidden sm:p-6'>
                <span className='text-sm font-medium text-gray-800 truncate'>
                  Total Eighths available
                </span>
                <div className='mt-1'>
                  <span className='w-40 mt-1 mr-2 text-3xl font-semibold text-gray-900'>
                    {props.product.eighth.eighthQty}
                  </span>
                  <div className='mb-2 text-green-700 font-bold'>
                    <span>
                      (${props.product.eighth.eighthPrice} per eighth)
                    </span>
                  </div>
                  <form className='mt-1'>
                    <span className='relative z-0 inline-flex shadow-sm rounded-md'>
                      <button
                        onClick={() => {
                          eighthQty > 0 &&
                            setEighthQty((prevState) => prevState - 1);
                        }}
                        type='button'
                        className='relative block items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      <input
                        onChange={qtyChangeHandler}
                        value={eighthQty}
                        type='text'
                        name='eighthQty'
                        id='eighthQty'
                        className='text-center w-16 shadow-sm focus:ring-green-500 focus:border-green-500 inline-flex  sm:text-sm border-gray-300'
                        placeholder='Qty'
                      />
                      <button
                        onClick={() => {
                          eighthQty < Number(props.product.eighth.eighthQty) &&
                            eighthQty >= 0 &&
                            setEighthQty((prevState) => prevState + 1);
                        }}
                        type='button'
                        className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </span>
                    <div>
                      <button
                        type='button'
                        className='block mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                      >
                        Add To Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {Number(props.product.quarter.quarterQty) > 0 && (
              <div className='px-4 w-full py-5 shadow rounded-lg overflow-hidden sm:p-6'>
                <span className='text-sm font-medium text-gray-800 truncate'>
                  Total Quarters available
                </span>
                <div className='mt-1'>
                  <span className='w-40 mt-1 mr-2 text-3xl font-semibold text-gray-900'>
                    {props.product.quarter.quarterQty}
                  </span>
                  <div className='mb-2 text-green-700 font-bold'>
                    <span>
                      (${props.product.quarter.quarterPrice} per quarter)
                    </span>
                  </div>
                  <form className='mt-1'>
                    <span className='relative z-0 inline-flex shadow-sm rounded-md'>
                      <button
                        onClick={() => {
                          quarterQty > 0 &&
                            setQuarterQty((prevState) => prevState - 1);
                        }}
                        type='button'
                        className='relative block items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      <input
                        onChange={qtyChangeHandler}
                        value={quarterQty}
                        type='text'
                        name='quarterQty'
                        id='quarterQty'
                        className='text-center w-16 shadow-sm focus:ring-green-500 focus:border-green-500 inline-flex  sm:text-sm border-gray-300'
                        placeholder='Qty'
                      />
                      <button
                        onClick={() => {
                          quarterQty <
                            Number(props.product.quarter.quarterQty) &&
                            quarterQty >= 0 &&
                            setQuarterQty((prevState) => prevState + 1);
                        }}
                        type='button'
                        className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </span>
                    <div>
                      <button
                        type='button'
                        className='block mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                      >
                        Add To Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {Number(props.product.half.halfQty) > 0 && (
              <div className='px-4 w-full py-5 shadow rounded-lg overflow-hidden sm:p-6'>
                <span className='text-sm font-medium text-gray-800 truncate'>
                  Total Halfs available
                </span>
                <div className='mt-1'>
                  <span className='w-40 mt-1 mr-2 text-3xl font-semibold text-gray-900'>
                    {props.product.half.halfQty}
                  </span>
                  <div className='mb-2 text-green-700 font-bold'>
                    <span>(${props.product.half.halfPrice} per half)</span>
                  </div>
                  <form className='mt-1'>
                    <span className='relative z-0 inline-flex shadow-sm rounded-md'>
                      <button
                        onClick={() => {
                          halfQty > 0 &&
                            setHalfQty((prevState) => prevState - 1);
                        }}
                        type='button'
                        className='relative block items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      <input
                        onChange={qtyChangeHandler}
                        value={halfQty}
                        type='text'
                        name='halfQty'
                        id='halfQty'
                        className='text-center w-16 shadow-sm focus:ring-green-500 focus:border-green-500 inline-flex  sm:text-sm border-gray-300'
                        placeholder='Qty'
                      />
                      <button
                        onClick={() => {
                          halfQty < Number(props.product.half.halfQty) &&
                            halfQty >= 0 &&
                            setHalfQty((prevState) => prevState + 1);
                        }}
                        type='button'
                        className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </span>
                    <div>
                      <button
                        type='button'
                        className='block mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                      >
                        Add To Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {Number(props.product.ounce.ounceQty) > 0 && (
              <div className='px-4 w-full py-5 shadow rounded-lg overflow-hidden sm:p-6'>
                <span className='text-sm font-medium text-gray-800 truncate'>
                  Total Ounces available
                </span>
                <div className='mt-1'>
                  <span className='w-40 mt-1 mr-2 text-3xl font-semibold text-gray-900'>
                    {props.product.ounce.ounceQty}
                  </span>
                  <div className='mb-2 text-green-700 font-bold'>
                    <span>(${props.product.ounce.ouncePrice} per ounce)</span>
                  </div>
                  <form className='mt-1'>
                    <span className='relative z-0 inline-flex shadow-sm rounded-md'>
                      <button
                        onClick={() => {
                          ounceQty > 0 &&
                            setOunceQty((prevState) => prevState - 1);
                        }}
                        type='button'
                        className='relative block items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      <input
                        onChange={qtyChangeHandler}
                        value={ounceQty}
                        type='text'
                        name='ounceQty'
                        id='ounceQty'
                        className='text-center w-16 shadow-sm focus:ring-green-500 focus:border-green-500 inline-flex  sm:text-sm border-gray-300'
                        placeholder='Qty'
                      />
                      <button
                        onClick={() => {
                          ounceQty < Number(props.product.ounce.ounceQty) &&
                            ounceQty >= 0 &&
                            setOunceQty((prevState) => prevState + 1);
                        }}
                        type='button'
                        className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </span>
                    <div>
                      <button
                        type='button'
                        className='block mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
                      >
                        Add To Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
