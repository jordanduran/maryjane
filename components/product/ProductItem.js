import { Fragment } from 'react';

const ProductItem = () => {
  const showProductHandler = () => {
    console.log('do something');
  };

  return (
    <Fragment>
      <li className='relative' onClick={showProductHandler}>
        <div className='focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden'>
          <img
            src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80'
            alt=''
            className='group-hover:opacity-75 object-cover pointer-events-none'
          />
          <button type='button' className='absolute inset-0'>
            <span className='sr-only'>View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>
          Strain
        </p>
        <p className='block text-sm font-medium text-gray-500 pointer-events-none'>
          Strain Type
        </p>
      </li>
    </Fragment>
  );
};

export default ProductItem;
