import { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <div className='relative pt-6 pb-2 sm:pb-24 bg-gray-50 md:h-0'>
      <nav
        className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
        aria-label='Global'
      >
        <div className='flex items-center flex-1'>
          <div className='flex items-center justify-between w-full md:w-auto'>
            <a href='/'>
              <span className='sr-only'>Workflow</span>
              <FontAwesomeIcon
                style={{ color: '#10B981' }}
                className='fa-2x'
                icon={faCannabis}
              />
            </a>
            <div className='-mr-2 flex items-center md:hidden'>
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
            <Link href='/apply'>
              <a
                className='font-medium text-gray-700 hover:text-gray-800'
                onFocus={() => setIsNavMenuOpen(false)}
              >
                Deliver with Maryjane
              </a>
            </Link>
          </div>
        </div>
        <div className='hidden md:flex md:space-x-4'>
          <Link href='/login'>
            <a
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray700 bg-gray-200 hover:bg-gray-300'
              onFocus={() => setIsNavMenuOpen(false)}
            >
              Sign In
            </a>
          </Link>
        </div>
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
                <FontAwesomeIcon
                  style={{ color: '#10B981' }}
                  className='fa-2x'
                  icon={faCannabis}
                />
              </div>
              <div className='-mr-2'>
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
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  onFocus={() => setIsNavMenuOpen((prevState) => !prevState)}
                >
                  Marketplace
                </a>
              </Link>
              <Link href='/apply'>
                <a
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-200'
                  onFocus={() => setIsNavMenuOpen((prevState) => !prevState)}
                >
                  Deliver with Maryjane
                </a>
              </Link>
            </div>

            <Link href='/login'>
              <a
                href='#'
                className='block w-full px-5 py-3 text-center font-medium text-green-500 bg-gray-50 hover:bg-gray-100'
                onFocus={() => setIsNavMenuOpen((prevState) => !prevState)}
              >
                Sign In
              </a>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
