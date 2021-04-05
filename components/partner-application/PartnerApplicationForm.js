import { useRef, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import ImageUpload from '../form/ImageUpload';

const PartnerApplicationForm = (props) => {
  const [session, loading] = useSession();

  const formRef = useRef();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const companyInputRef = useRef();
  const companyEmailInputRef = useRef();
  const countryInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const companyLogoInputRef = useRef();
  const zipcodeInputRef = useRef();
  // const idInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredCompanyEmail = companyEmailInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = companyLogoInputRef.current.value;
    const enteredZipcode = zipcodeInputRef.current.value;

    const companyData = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      company: enteredCompany,
      companyEmail: enteredCompanyEmail,
      country: enteredCountry,
      street: enteredStreet,
      city: enteredCity,
      state: enteredState,
      zipcode: enteredZipcode,
      // stateId: enteredId,
      isVerified: false,
      hasApplied: true,
    };

    if (!console.error) {
      nameInputRef.current.value = '';
      emailInputRef.current.value = '';
      phoneInputRef.current.value = '';
      companyInputRef.current.value = '';
      companyEmailInputRef.current.value = '';
      countryInputRef.current.value = '';
      streetInputRef.current.value = '';
      cityInputRef.current.value = '';
      companyLogoInputRef.current.value = '';
      zipcodeInputRef.current.value = '';
    }

    props.onAddCompanyHandler(companyData);
  };

  useEffect(() => {
    if (props.onHeroBtnClicked) {
      nameInputRef.current.focus();
      formRef.current.scrollIntoView();
      props.onSetHeroBtnClicked(false);
    }
  }, [props.onHeroBtnClicked]);

  return (
    <div className='confetti-bg'>
      <form
        ref={formRef}
        onSubmit={submitHandler}
        action='#'
        method='POST'
        className='space-y-6'
        onFocus={() => props.onHandleShowLoginAlert(true)}
      >
        <div>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Full Name
            </label>
            <div className='mt-1'>
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                placeholder='Full Name'
                autoFocus={props.onHeroBtnClicked && true}
                ref={nameInputRef}
                required
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm mb-4'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700'
            >
              Phone
            </label>
            <div className='mt-1'>
              <input
                id='phone'
                name='phone'
                type='tel'
                autoComplete='phone'
                placeholder='Phone'
                ref={phoneInputRef}
                required
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm mb-4'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email Address
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                placeholder='Email'
                readOnly
                value={session ? `${session.user.email}` : ''}
                ref={emailInputRef}
                required
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm mb-4'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='company'
              className='block text-sm font-medium text-gray-700'
            >
              Company
            </label>
            <div className='mt-1'>
              <input
                id='company'
                name='company'
                type='company'
                autoComplete='company'
                placeholder='Company'
                ref={companyInputRef}
                required
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm mb-4'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='company'
              className='block text-sm font-medium text-gray-700'
            >
              Company Email
            </label>
            <div className='mt-1'>
              <input
                id='companyEmail'
                name='companyEmail'
                type='companyEmail'
                autoComplete='companyEmail'
                placeholder='Company Email'
                ref={companyEmailInputRef}
                required
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm mb-4'
              />
            </div>
          </div>
          <label
            htmlFor='country'
            className='block text-sm font-medium text-gray-700'
          >
            Country / Region
          </label>
          <div className='mt-1 sm:col-span-2 md:col-span-4'>
            <select
              id='country'
              name='country'
              autoComplete='country'
              placeholder='Country'
              ref={countryInputRef}
              className='max-w-lg block focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:max-w-xs md:w-vw sm:text-sm border-gray-300 rounded-md mb-4'
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div className='mt-1'>
            <label
              htmlFor='street_address'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1'
            >
              Street Address
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <input
                type='text'
                name='street_address'
                id='street_address'
                autoComplete='street-address'
                placeholder='Street Address'
                ref={streetInputRef}
                className='block max-w-lg w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 rounded-md mb-4'
              />
            </div>
          </div>

          <div className=''>
            <label
              htmlFor='city'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1'
            >
              City
            </label>
            <div className='sm:mt-0 sm:col-span-2'>
              <input
                type='text'
                name='city'
                id='city'
                placeholder='City'
                ref={cityInputRef}
                className='max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md mb-4'
              />
            </div>
          </div>

          <div className=''>
            <label
              htmlFor='state'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1'
            >
              State / Province
            </label>
            <div className='sm:mt-0 sm:col-span-2'>
              <input
                type='text'
                name='state'
                id='state'
                placeholder='State'
                ref={companyLogoInputRef}
                className='max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md mb-4'
              />
            </div>
          </div>

          <div className=''>
            <label
              htmlFor='zipcode'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1'
            >
              Zipcode
            </label>
            <div className='sm:mt-0 sm:col-span-2'>
              <input
                type='text'
                name='zipcode'
                id='zipcode'
                placeholder='Zipcode'
                autoComplete='postal-code'
                ref={zipcodeInputRef}
                className='max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md mb-4'
              />
            </div>
          </div>

          <div className='sm:col-span-6'>
            <label
              htmlFor='cover_photo'
              className='block text-sm font-medium text-gray-700'
            >
              Company Logo
            </label>
            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
                <svg
                  className='mx-auto h-12 w-12 text-gray-400'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label
                    htmlFor='file-upload'
                    className='relative cursor-pointer bg-gray-100 rounded-md font-medium text-green-400 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500'
                  >
                    <span>Upload a file</span>
                    <ImageUpload />
                  </label>
                  <p className='pl-1 text-gray-400'>or drag and drop</p>
                </div>
                <p className='text-xs text-gray-400'>
                  PNG, JPG, JPEG up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={!session}
              className='apply-btn w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10'
            >
              Submit application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PartnerApplicationForm;
