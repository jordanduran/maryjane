import CompanyList from '../../components/company/CompanyList';
import Hero from '../../components/marketplace/Hero';

const MarketplacePage = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 sm:px-4 lg:px-8 confetti-bg'>
      <Hero />
      <div className='max-w-5xl md:max-w-4xl lg:max-w-7xl mx-auto'>
        <CompanyList />
      </div>
    </div>
  );
};

export default MarketplacePage;
