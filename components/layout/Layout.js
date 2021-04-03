import { Fragment, useContext } from 'react';
import AlertContext from '../../store/AlertContext';
import Alert from '../ui/Alert';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  const alertContext = useContext(AlertContext);

  const activeAlert = alertContext.alert;

  return (
    <Fragment>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 confetti-bg'>
        <Navbar />
        {activeAlert && (
          <Alert
            title={activeAlert.title}
            message={activeAlert.message}
            status={activeAlert.status}
          />
        )}
        {props.children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
