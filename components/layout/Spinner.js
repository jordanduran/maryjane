import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className='spinner h-screen'>
      <Loader type='TailSpin' color='#12B981' height={100} width={100} />
    </div>
  );
};

export default Spinner;
