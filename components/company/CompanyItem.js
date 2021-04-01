import { useRouter } from 'next/router';

const CompanyItem = (props) => {
  const router = useRouter();

  const showCompanyPageHandler = () => {
    router.push('/marketplace/' + props.id);
  };

  return (
    <>
      <li className='relative' onClick={showCompanyPageHandler}>
        <div className='focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden'>
          <img
            src='https://images.unsplash.com/photo-1584392335317-b7b40d8a1c47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1915&q=80'
            alt=''
            className='group-hover:opacity-75 object-cover pointer-events-none'
          />
          <button type='button' className='absolute inset-0'>
            <span className='sr-only'>View company details</span>
          </button>
        </div>
        <div className='mt-2 flex'>
          <div className='w-1/2 flex items-center text-sm text-gray-700 text-base font-semibold'>
            <svg
              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>

            <p>{props.company}</p>
          </div>
        </div>
        <div className='flex items-center text-sm text-gray-700 text-base font-semibold'>
          <svg
            className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>

          <p>
            {props.city}, {props.state}
          </p>
        </div>
      </li>
      <li className='relative'>
        <div className='focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden'>
          <img
            src='https://images.unsplash.com/photo-1584392335317-b7b40d8a1c47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1915&q=80'
            alt=''
            className='group-hover:opacity-75 object-cover pointer-events-none'
          />
          <button type='button' className='absolute inset-0'>
            <span className='sr-only'>View company details</span>
          </button>
        </div>
        <div className='mt-2 flex'>
          <div className='w-1/2 flex items-center text-sm text-gray-700 text-base font-semibold'>
            <svg
              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>

            <p>{props.company}</p>
          </div>
        </div>
        <div className='flex items-center text-sm text-gray-700 text-base font-semibold'>
          <svg
            className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>

          <p>
            {props.city}, {props.state}
          </p>
        </div>
      </li>
    </>
  );
};

export default CompanyItem;
