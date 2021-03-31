import AuthForm from '../../components/auth/AuthForm';
import { getSession } from 'next-auth/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis } from '@fortawesome/free-solid-svg-icons';

const AuthPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 pt-0 sm:px-6 lg:px-8 confetti-bg'>
      <div className='sm:mx-auto sm:w-full text-center sm:max-w-md'>
        <div>
          <FontAwesomeIcon
            style={{ color: '#10B981' }}
            className='h-14 w-auto fa-10x'
            icon={faCannabis}
          />
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/marketplace',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AuthPage;
