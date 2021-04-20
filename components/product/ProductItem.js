import { Fragment } from 'react';
import { useRouter } from 'next/router';

const ProductItem = (props) => {
  const router = useRouter();
  const companyId = router.query.companyId;

  const showProductHandler = () => {
    router.push('/marketplace/' + companyId + '/' + props.id);
  };

  const updateProductHandler = () => {
    router.push(
      '/marketplace/' + companyId + '/' + props.id + '/' + 'update-product'
    );
  };

  const deleteProductHandler = () => {
    props.onSetDeleteBtnClicked(true);
    props.onSetProductToDelete(props.id);
  };

  if (props.onEditBtnClicked) {
    return (
      <Fragment>
        <li key={props.id} className='relative'>
          <div className='group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden'>
            <img
              src={props.productImage}
              alt={props.productName}
              className='w-full object-cover pointer-events-none'
            />
            <div className='flex flex-row justify-between justify-between h-1/5 z-10 img-button'>
              <button
                onClick={updateProductHandler}
                type='button'
                className='z-10 w-9 h-9 m-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
              >
                <svg
                  className='m-auto h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                </svg>
              </button>
              <button
                onClick={deleteProductHandler}
                type='button'
                className='z-10 w-9 h-9 m-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
              >
                <svg
                  className='m-auto h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>

          <p className='capitalize w-1/2 mt-2 inline-block text-sm font-bold text-gray-900 truncate pointer-events-none'>
            {props.productName}
          </p>
          {Number(props.gram.gramQty) +
            Number(props.eighth.eighthQty) +
            Number(props.quarter.quarterQty) +
            Number(props.half.halfQty) +
            Number(props.ounce.ounceQty) >=
          20 ? (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                In Stock
              </span>
            </p>
          ) : Number(props.gram.gramQty) === 0 &&
            Number(props.eighth.eighthQty) === 0 &&
            Number(props.eighth.eighthQty) === 0 &&
            Number(props.half.halfQty) === 0 &&
            Number(props.ounce.ounceQty) === 0 ? (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800'>
                Out of Stock
              </span>
            </p>
          ) : Number(props.gram.gramQty) +
              Number(props.eighth.eighthQty) +
              Number(props.eighth.eighthQty) +
              Number(props.half.halfQty) +
              Number(props.ounce.ounceQty) <
              10 &&
            Number(props.gram.gramQty) +
              Number(props.eighth.eighthQty) +
              Number(props.eighth.eighthQty) +
              Number(props.half.halfQty) +
              Number(props.ounce.ounceQty) <
              10 >
              0 ? (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700'>
                Low in Stock
              </span>
            </p>
          ) : (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                In Stock
              </span>
            </p>
          )}
          <p className='block text-sm font-medium text-gray-500 pointer-events-none'>
            {props.productType}
          </p>
        </li>
      </Fragment>
    );
  } else if (!props.onEditBtnClicked) {
    return (
      <Fragment>
        <li className='relative' onClick={showProductHandler}>
          <div className='focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden'>
            <img
              src={props.productImage}
              alt={props.productName}
              className='w-full group-hover:opacity-75 object-cover cursor-pointer'
            />
          </div>

          <p className='capitalize font-bold w-1/2 mt-2 inline-block text-sm font-medium text-gray-900 truncate pointer-events-none'>
            {props.productName}
          </p>

          {Number(props.gram.gramQty) +
            Number(props.eighth.eighthQty) +
            Number(props.quarter.quarterQty) +
            Number(props.half.halfQty) +
            Number(props.ounce.ounceQty) >
          20 ? (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                In Stock
              </span>
            </p>
          ) : Number(props.gram.gramQty) === 0 &&
            Number(props.eighth.eighthQty) === 0 &&
            Number(props.eighth.eighthQty) === 0 &&
            Number(props.half.halfQty) === 0 &&
            Number(props.ounce.ounceQty) === 0 ? (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800'>
                Out of Stock
              </span>
            </p>
          ) : Number(props.gram.gramQty) +
              Number(props.eighth.eighthQty) +
              Number(props.eighth.eighthQty) +
              Number(props.half.halfQty) +
              Number(props.ounce.ounceQty) <
              10 &&
            Number(props.gram.gramQty) +
              Number(props.eighth.eighthQty) +
              Number(props.eighth.eighthQty) +
              Number(props.half.halfQty) +
              Number(props.ounce.ounceQty) <
              10 >
              0 ? (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700'>
                Low in Stock
              </span>
            </p>
          ) : (
            <p className='w-1/2 mt-2 inline-block text-right text-sm font-medium text-gray-900 truncate pointer-events-none'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                In Stock
              </span>
            </p>
          )}
          <p className='w-1/2 block text-sm font-medium text-gray-500 pointer-events-none'>
            {props.productType}
          </p>
        </li>
      </Fragment>
    );
  }
};

export default ProductItem;
