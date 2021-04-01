import PartnerApplicationForm from '../../components/partner-application/PartnerApplicationForm';

const PartnerApplicationPage = () => {
  const addCompanyHandler = async (enteredCompanyData) => {
    const response = await fetch('/api/newCompany', {
      method: 'POST',
      body: JSON.stringify(enteredCompanyData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    try {
      if (response.ok) {
        console.log(data);

        router.push('/apply/application-successful');
      }
    } catch (error) {
      if (response.status === 422) {
        console.log(error);
      }
    }

    return data;
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='bg-gray-50 overflow-hidden shadow rounded-lg mb-10'>
        <div className='px-4 py-5 sm:p-6'>
          <PartnerApplicationForm onAddCompanyHandler={addCompanyHandler} />
        </div>
      </div>
    </div>
  );
};

export default PartnerApplicationPage;
