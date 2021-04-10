import { useState, useContext } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../store/userContext';
import { useCart } from '../../store/CartContext';

import AlertContext from '../../store/AlertContext';

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const loggedInUser = useContext(UserContext);
  const { showAlert } = useContext(AlertContext);
  const [session, loading] = useSession();
  const router = useRouter();
  const cartItems = useCart();

  console.log(cartItems);

  const logoutHandler = () => {
    signOut();
    localStorage.removeItem('user');
    setIsNavMenuOpen(false);
    router.replace('/');
    showAlert({
      title: 'Successful sign out.',
      message: `You have been successfully signed out.`,
      status: 'success',
    });
  };

  return (
    <div className='relative pt-6 pb-2 sm:pb-24 bg-gray-50 md:h-0'>
      <nav
        className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
        aria-label='Global'
      >
        <div className='flex items-center flex-1'>
          <div className='flex items-center justify-between w-full md:w-auto'>
            <Link href='/'>
              <a>
                <span className='sr-only'>Workflow</span>
                <FontAwesomeIcon
                  style={{ color: '#10B981' }}
                  className='fa-2x'
                  icon={faCannabis}
                />
              </a>
            </Link>

            <div className='-mr-2 flex items-center md:hidden'>
              {cartItems.length > 0 && (
                <span className='absolute top-0 bottom-6 right-24 inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                  <span className='text-xs font-bold'>{cartItems.length}</span>
                </span>
              )}
              <Link href='/cart'>
                <button
                  type='button'
                  className='mr-5 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open cart page</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-gray-700'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                </button>
              </Link>
              <button
                onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
                type='button'
                className='bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='hidden space-x-10 md:flex md:ml-10'>
            <Link href='/marketplace'>
              <a
                className='font-medium text-gray-700 hover:text-gray-800'
                onFocus={() => setIsNavMenuOpen(false)}
              >
                Marketplace
              </a>
            </Link>
            <Link href='/partner-application'>
              <a
                className='font-medium text-gray-700 hover:text-gray-800'
                onFocus={() => setIsNavMenuOpen(false)}
              >
                Partnership
              </a>
            </Link>
          </div>
        </div>
        <div className='hidden space-x-10 md:flex md:ml-10'>
          <Link href='/cart'>
            <button
              type='button'
              className='mr-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
              aria-expanded='false'
            >
              <span className='sr-only'>Open cart page</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-700 hover:text-green-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>

              <span className='ml-1'>
                {cartItems.length > 0 && '( ' + cartItems.length + ' )'}
              </span>
            </button>
          </Link>
        </div>

        {!session && !loading && (
          <div className='hidden md:flex md:space-x-4'>
            <Link href='/auth'>
              <a
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300'
                onFocus={() => setIsNavMenuOpen(false)}
              >
                Sign In
              </a>
            </Link>
          </div>
        )}

        {session && (
          <div className='hidden md:flex md:space-x-4'>
            <Link href='/account'>
              <a
                className='hover:text-green-500 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700'
                onFocus={() => setIsNavMenuOpen(false)}
              >
                <span className='inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100 mr-2'>
                  <svg
                    className='h-full w-full text-gray-300'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                  </svg>
                </span>
                <span className='uppercase text-sm font-semibold'>
                  {loggedInUser.name || session.user.name}
                </span>
              </a>
            </Link>
            <Link href='/auth'>
              <a
                onClick={logoutHandler}
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300'
                onFocus={() => setIsNavMenuOpen(false)}
              >
                <FontAwesomeIcon
                  className='fa-2x text-base mr-2 text-gray-700'
                  icon={faSignOutAlt}
                />
                Sign Out
              </a>
            </Link>
          </div>
        )}
      </nav>

      <Transition
        show={isNavMenuOpen}
        entering='duration-150 ease-out'
        from='opacity-0 scale-95'
        to='opacity-100 scale-100'
        leaving='duration-100 ease-in'
        from='opacity-100 scale-100'
        to='opacity-0 scale-95'
      >
        <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10'>
          <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div>
                <Link href='/'>
                  <a>
                    <span className='sr-only'>Workflow</span>
                    <FontAwesomeIcon
                      style={{ color: '#10B981' }}
                      className='fa-2x'
                      icon={faCannabis}
                    />
                  </a>
                </Link>
              </div>
              <div className=''>
                <button
                  onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500'
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link href='/marketplace'>
                <a
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Marketplace
                </a>
              </Link>
              <Link href='/partner-application'>
                <a
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-200'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Partnership
                </a>
              </Link>
            </div>

            {!session && !loading && (
              <Link href='/auth'>
                <a
                  className='block w-full px-5 py-3 text-center font-medium text-green-500 bg-gray-50 hover:bg-gray-100'
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  Sign In
                </a>
              </Link>
            )}
            {session && (
              <div className='flex flex-col content-center'>
                <Link href='/account'>
                  <a
                    className='flex content-center justify-center w-full px-5 py-3 text-center font-medium text-green-500 bg-gray-50 hover:bg-gray-100'
                    onClick={() => setIsNavMenuOpen(false)}
                  >
                    <span className='inline-block align-middle mt-1.5'>
                      View Account
                    </span>
                  </a>
                </Link>
                <Link href='/auth'>
                  <a
                    onClick={logoutHandler}
                    className='block w-full px-5 py-3 text-center font-medium text-green-500 bg-gray-50 hover:bg-gray-100'
                  >
                    <FontAwesomeIcon
                      className='fa-2x text-base mr-2'
                      icon={faSignOutAlt}
                    />
                    Sign Out
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
