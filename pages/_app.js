import { useState, useMemo } from 'react';
import { Provider } from 'next-auth/client';
import Layout from '../components/layout/Layout';
import { UserContext } from '../store/userContext';
import { AlertContextProvider } from '../store/AlertContext';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const value = useMemo(() => ({ loggedInUser, setLoggedInUser }), [
    loggedInUser,
    setLoggedInUser,
  ]);

  return (
    <UserContext.Provider value={value}>
      <AlertContextProvider>
        <Provider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </AlertContextProvider>
    </UserContext.Provider>
  );
};

export default MyApp;
