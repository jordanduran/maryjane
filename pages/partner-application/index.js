import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import PartnerApplicationForm from '../../components/partner-application/PartnerApplicationForm';
import AlertContext from '../../store/AlertContext';

const PartnerApplicationPage = () => {
  const [heroBtnClicked, setHeroBtnClicked] = useState(false);
  const [userClickedForm, setUserClickedForm] = useState(false);
  const [session, loading] = useSession();
  const { showAlert } = useContext(AlertContext);
  const router = useRouter();

  const handleShowLoginAlert = (formFocused) => {
    if (formFocused && !session) {
      setUserClickedForm(true);
    }
  };

  const addCompanyHandler = async (enteredCompanyData) => {
    const response = await fetch('/api/createCompany', {
      method: 'POST',
      body: JSON.stringify(enteredCompanyData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      router.push('/partner-application/application-successful');
      showAlert({
        title: 'Partnership application successful',
        message:
          'Congratulations! You have successfully applied for partnership. Please allow 1-3 business days for the application to be processed.',
        status: 'success',
      });
    } else if (!response.ok) {
      showAlert({
        title: 'Partnership application already in database',
        message:
          data.message ||
          'Sorry, but your application was not submitted successfully at this time.',
        status: 'notice',
      });
    }

    return data;
  };

  useEffect(() => {
    if (userClickedForm) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      showAlert({
        title: 'Must login to complete form',
        message: `You must be signed in if you want to apply for partnership.`,
        status: 'notice',
      });

      setTimeout(() => {
        setUserClickedForm(false);
      }, 4000);
    }
  }, [userClickedForm]);

  return (
    <div className='max-w-4xl mx-auto mt-10 md:mt-2'>
      <div className='max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl'>
          <span className='block text-green-500 text-4xl md:text-5xl'>
            Ready to dive in?
          </span>
          <span className='block text-gray-700 text-3xl md:text-5xl'>
            Start your partnership with us today!
          </span>
        </h2>
        <div className='mt-8 flex justify-center'>
          <div className='inline-flex rounded-md shadow'>
            <button
              onClick={() => setHeroBtnClicked(true)}
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600'
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className='flex place-content-center text-center mb-4 md:mb-10'>
        <svg
          className='animate-bounce w-10 h-10 text-gray-700 self-center'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>

      <div className='bg-gray-50 overflow-hidden shadow rounded-lg mb-10'>
        <div className='px-4 py-5 sm:p-6'>
          <PartnerApplicationForm
            onHandleShowLoginAlert={handleShowLoginAlert}
            onHeroBtnClicked={heroBtnClicked}
            onSetHeroBtnClicked={setHeroBtnClicked}
            onAddCompanyHandler={addCompanyHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerApplicationPage;
