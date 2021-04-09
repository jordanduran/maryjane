import { useState, useEffect, useMemo } from 'react';
import { Provider } from 'next-auth/client';
import { UserContext } from '../store/userContext';
import { AlertContextProvider } from '../store/AlertContext';
import { CartProvider } from '../store/CartContext';

import Router from 'next/router';
import Layout from '../components/layout/Layout';
import Spinner from '../components/layout/Spinner';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : null
  );

  const value = useMemo(() => ({ loggedInUser, setLoggedInUser }), [
    loggedInUser,
    setLoggedInUser,
  ]);

  useEffect(() => {
    const startLoader = () => {
      setLoading(true);
    };
    const endLoader = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', startLoader);
    Router.events.on('routeChangeComplete', endLoader);
    Router.events.on('routeChangeError', endLoader);
    return () => {
      Router.events.off('routeChangeStart', startLoader);
      Router.events.off('routeChangeComplete', endLoader);
      Router.events.off('routeChangeError', endLoader);
    };
  }, []);

  return (
    <UserContext.Provider value={value}>
      <AlertContextProvider>
        <CartProvider>
          <Provider session={pageProps.session}>
            <Layout>
              {loading ? <Spinner /> : <Component {...pageProps} />}
            </Layout>
          </Provider>
        </CartProvider>
      </AlertContextProvider>
    </UserContext.Provider>
  );
};

export default MyApp;
