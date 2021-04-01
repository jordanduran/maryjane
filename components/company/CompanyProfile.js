import Link from 'next/link';

const CompanyProfile = (props) => {
  return (
    <div className='min-h-screen confetti-bg bg-gray-800'>
      <main className='py-10 sm:ml-5'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
          <div className='flex items-center space-x-5'>
            <div className='flex-shrink-0'>
              <div className='relative'>
                <img
                  className='h-16 w-16 rounded-full'
                  src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                  alt=''
                />
                <span
                  className='absolute inset-0 shadow-inner rounded-full'
                  aria-hidden='true'
                ></span>
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-700'>
                {props.company}
              </h1>
              <p className='text-sm font-medium text-gray-700'>
                {props.city}, {props.state}
              </p>
            </div>
          </div>
          <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3'>
            <Link href='/marketplace/add-new-product'>
              <button
                type='button'
                className='inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
              >
                Add New Product
              </button>
            </Link>
            <button
              type='button'
              className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-600'
            >
              Edit Inventory
            </button>
          </div>
        </div>

        <div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3 pl-5 pr-5 rounded-lg'>
          <div className='space-y-6 lg:col-start-1 lg:col-span-2 rounded-lg'>
            <section aria-labelledby='applicant-information-title'>
              <div className='bg-white shadow overflow-hidden rounded-md'>
                {/* <ProductList
                  companies={DUMMY_COMPANIES}
                  inventoryBtnClick={inventoryBtnClick}
                /> */}
              </div>
            </section>

            {/* <!-- Reviews--> */}
          </div>

          <section
            aria-labelledby='timeline-title'
            className='lg:col-start-3 lg:col-span-1'
          >
            <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 rounded-lg'>
              <h2
                id='timeline-title'
                className='text-lg font-medium text-gray-900'
              >
                Recent Reviews
              </h2>
              <ul className='divide-y divide-gray-200'>
                <li className='relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                  <div className='flex justify-between space-x-3'>
                    <div className='min-w-0 flex-1'>
                      <a href='#' className='block focus:outline-none'>
                        <span
                          className='absolute inset-0'
                          aria-hidden='true'
                        ></span>
                        <p className='text-sm font-medium text-gray-900 truncate'>
                          Gloria Roberston
                        </p>
                        <p className='text-sm text-gray-500 truncate'>
                          Velit placeat sit ducimus non sed
                        </p>
                      </a>
                    </div>
                    <time
                      dateTime='2021-01-27T16:35'
                      className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'
                    >
                      1d ago
                    </time>
                  </div>
                  <div className='mt-1'>
                    <p className='line-clamp-2 text-sm text-gray-600'>
                      Doloremque dolorem maiores assumenda dolorem facilis.
                      Velit vel in a rerum natus facere. Enim rerum eaque qui
                      facilis. Numquam laudantium sed id dolores omnis in. Eos
                      reiciendis deserunt maiores et accusamus quod dolor.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
