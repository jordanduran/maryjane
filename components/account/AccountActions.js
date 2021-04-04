import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { UserContext } from '../../store/userContext';

const AccountActions = () => {
  const { loggedInUser } = useContext(UserContext);
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace('/auth');
    }
  }, []);

  return (
    <div className='confetti-bg'>
      <div className='max-w-7xl mx-auto py-5 px-4 sm:py-24 md:py-5 sm:px-6 lg:px-8 md:mt-10'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-green-400 tracking-wide uppercase'>
            Your Account
          </h2>
        </div>
      </div>
      <div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px ml-4 mr-4 md:ml-10 md:mr-10 lg:ml-40 lg:mr-40 md:mb-20'>
        <div className='rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-gray-50 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-400'>
          <div>
            <span className='rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-gray-50'>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-medium'>
              <span
                className='cursor-pointer'
                onClick={() =>
                  router.push(
                    '/account/' + loggedInUser.id + '/personal-information'
                  )
                }
              >
                <a className='focus:outline-none'>
                  <span className='absolute inset-0' aria-hidden='true'></span>
                  Personal Information
                </a>
              </span>
            </h3>
            <p className='mt-2 text-sm text-gray-500'>
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
            aria-hidden='true'
          >
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
            </svg>
          </span>
        </div>

        <div className='sm:rounded-tr-lg relative group bg-gray-50 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-400'>
          <div>
            <span className='rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-gray-50'>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </span>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-medium'>
              <span
                className='cursor-pointer'
                onClick={() =>
                  router.push(
                    '/account/' + loggedInUser.id + '/delivery-addresses'
                  )
                }
              >
                <a className='focus:outline-none'>
                  <span className='absolute inset-0' aria-hidden='true'></span>
                  Delivery Addresses
                </a>
              </span>
            </h3>
            <p className='mt-2 text-sm text-gray-500'>
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
            aria-hidden='true'
          >
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
            </svg>
          </span>
        </div>

        <div className='relative group bg-gray-50 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500'>
          <div>
            <span className='rounded-lg inline-flex p-3 bg-light-blue-50 text-light-blue-700 ring-4 ring-gray-50'>
              <svg
                className='h-7 w-7'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                />
              </svg>
            </span>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-medium'>
              <span
                className='cursor-pointer'
                onClick={() =>
                  router.push('/account/' + loggedInUser.id + '/identification')
                }
              >
                <a className='focus:outline-none'>
                  <span className='absolute inset-0' aria-hidden='true'></span>
                  Identification
                </a>
              </span>
            </h3>
            <p className='mt-2 text-sm text-gray-500'>
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
            aria-hidden='true'
          >
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
            </svg>
          </span>
        </div>

        <div className='relative group bg-gray-50 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
          <div>
            <span className='rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-gray-50'>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </span>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-medium'>
              <span
                className='cursor-pointer'
                onClick={() =>
                  router.push('/account/' + loggedInUser.id + '/settings')
                }
              >
                {/* UseState to change from Account settings -> Company settings */}
                <a className='focus:outline-none'>
                  <span className='absolute inset-0' aria-hidden='true'></span>
                  Settings
                </a>
              </span>
            </h3>
            <p className='mt-2 text-sm text-gray-500 mb-4'>
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
            aria-hidden='true'
          >
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
