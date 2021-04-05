import { Fragment } from 'react';

const ProductItem = (props) => {
  const showProductHandler = () => {
    console.log('do something');
  };

  if (props.onEditBtnClicked) {
    return (
      <Fragment>
        <li className='relative'>
          <div className='focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              alt=''
              className='object-cover pointer-events-none'
            />
            <div className='flex flex-row justify-between justify-between h-1/5 z-10 img-button'>
              <button
                onClick={() => console.log('Edit')}
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
                onClick={() => console.log('Delete')}
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

          <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>
            Strawberry Kush
          </p>
          <p className='block text-sm font-medium text-gray-500 pointer-events-none'>
            Hybrid
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
              src='https://images.unsplash.com/photo-1616690002178-a2e2736a2e2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxjYW5uYWJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              alt=''
              className='group-hover:opacity-75 object-cover cursor-pointer'
            />
          </div>

          <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>
            Strawberry Kush
          </p>
          <p className='block text-sm font-medium text-gray-500 pointer-events-none'>
            Hybrid
          </p>
        </li>
      </Fragment>
    );
  }
};

export default ProductItem;
