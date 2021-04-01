import { useSession, getSession } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';

const ApplicationSuccessful = () => {
  return (
    <div className='bg-gray-50 confetti-bg'>
      <div className='max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-700 md:text-6xl'>
          <span className='block'>
            Thank you for submitting an application with us!
          </span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-green-800'>
          Please allow 3-4 business days for the application to be processed.
          You will receive an email with confirmation once a decision is made.
          For now you can view the marketplace and browse the existing
          companies!
        </p>
        <Link href='/marketplace'>
          <a className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-gray-200 hover:bg-gray-300 sm:w-auto'>
            View marketplace
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationSuccessful;
