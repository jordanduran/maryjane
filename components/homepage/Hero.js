import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative bg-gray-50 overflow-hidden confetti-bg'>
      <div className='relative pt-6 pb-16 sm:pb-24'>
        <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-6xl'>
              <span className='block xl:inline'>
                Get your cannabis delivered
              </span>
              <span className='block text-green-500 xl:inline'>
                without leaving the comfort of your home
              </span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
              <div className='rounded-md shadow'>
                <Link href='/marketplace'>
                  <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10'>
                    Visit Marketplace
                  </a>
                </Link>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <Link href='/auth'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                  >
                    Sign In
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
