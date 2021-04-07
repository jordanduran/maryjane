import { useState, useContext } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { UserContext } from '../../store/userContext';
import ProductList from '../product/ProductList';
import { useRouter } from 'next/router';

const CompanyProfile = (props) => {
  const [editBtnClicked, setEditBtnClicked] = useState(false);
  const [session, loading] = useSession();
  const router = useRouter();
  const loggedInUser = useContext(UserContext);
  const companyId = router.query.companyId;

  if (session && !loading && props.userId === loggedInUser.loggedInUser.id) {
    return (
      <div className='confetti-bg bg-gray-50 px-4 py-5 border-b border-gray-200 sm:px-6'>
        <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='uppercase text-lg leading-6 font-semibold text-gray-900'>
              <a href='#' className='flex-shrink-0 group block'>
                <div className='flex items-center'>
                  <div>
                    <img
                      className='inline-block h-12 w-12 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=lLzeNgAB2h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-bold text-gray-700 group-hover:text-gray-900'>
                      <svg
                        className='h-5 inline-block mr-1'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                        />
                      </svg>
                      {props.company}
                    </p>
                    <p className='text-sm'>
                      <svg
                        className='h-5 mr-1 inline-block'
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
                      {props.city}, {props.state}
                    </p>
                  </div>
                </div>
              </a>
            </h3>
          </div>
          <div className='ml-4 mt-2 flex-shrink-0'>
            <Link href={`/marketplace/${companyId}/add-new-product`}>
              <button
                type='button'
                className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'
              >
                Add New Product
              </button>
            </Link>
            <button
              onClick={() => setEditBtnClicked((prevState) => !prevState)}
              type='button'
              className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 m-2'
            >
              {editBtnClicked ? 'Done' : 'Edit Inventory'}
            </button>
          </div>
        </div>
        <ProductList
          products={props.products}
          onEditBtnClicked={editBtnClicked}
          onSetEditBtnClicked={setEditBtnClicked}
        />
      </div>
    );
  } else {
    return (
      <div className='confetti-bg bg-gray-50 px-4 py-5 border-b border-gray-200 sm:px-6'>
        <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='uppercase text-lg leading-6 font-semibold text-gray-900'>
              <a href='#' className='flex-shrink-0 group block'>
                <div className='flex items-center'>
                  <div>
                    <img
                      className='inline-block h-12 w-12 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=lLzeNgAB2h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-bold text-gray-700 group-hover:text-gray-900'>
                      <svg
                        className='h-5 inline-block mr-1'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                        />
                      </svg>
                      {props.company}
                    </p>
                    <p className='text-sm text-gray-700'>
                      <svg
                        className='h-5 mr-1 inline-block'
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
                      {props.city}, {props.state}
                    </p>
                  </div>
                </div>
              </a>
            </h3>
          </div>
        </div>
        <ProductList products={props.products} />
      </div>
    );
  }
};

export default CompanyProfile;
