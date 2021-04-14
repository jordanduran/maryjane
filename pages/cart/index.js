import Link from 'next/link';
import CartList from '../../components/cart/CartList';
import { useCart } from '../../store/CartContext';

const CartPage = () => {
  const cartProducts = useCart();

  if (!cartProducts.length) {
    return (
      <div>
        <div className='max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl'>
            <span className='block'>You currently have</span>
            <span className='block'>no products in your cart</span>
          </h2>
          <div className='mt-8 flex justify-center'>
            <div className='ml-3 inline-flex'>
              <Link href='/marketplace'>
                <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200'>
                  Visit Marketplace
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (cartProducts.length) {
    return (
      <div>
        <div className='pb-5 my-5 border-b border-gray-200'>
          <h3 className='text-2xl leading-6 font-semibold text-gray-800'>
            Shopping Cart
          </h3>
        </div>
        <CartList />
        <div className='pb-5 my-5 border-b border-gray-200'></div>
        <h3 className='text-2xl leading-6 font-semibold text-gray-800'>
          Total:
        </h3>
      </div>
    );
  }
};

export default CartPage;
