import { Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 confetti-bg'>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
