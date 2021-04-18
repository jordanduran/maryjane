import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart, useDispatchCart } from '../../store/CartContext';
import CartList from '../../components/cart/CartList';
import { TrashIcon } from '@heroicons/react/solid';

const CartPage = () => {
  const router = useRouter();
  const cartProducts = useCart();
  const dispatch = useDispatchCart();
  const companyData = cartProducts.map((product) => product.companyData);
  const totalPrice = cartProducts.reduce(
    (total, currentValue) =>
      total +
      Number(currentValue.product.quantity.selectedQtyPrice) *
        currentValue.product.quantity.qty,
    0
  );

  const emptyCartHandler = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  if (!cartProducts.length) {
    return (
      <div>
        <div className='max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mb-5'>
          <h2 className='text-4xl font-extrabold tracking-tight text-gray-800 sm:text-4xl'>
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
        <div className='flex justify-between items-center pb-5 my-5 border-b border-gray-200'>
          <h3 className='inline text-2xl leading-6 font-semibold text-gray-800'>
            Total:{' '}
            {totalPrice.toLocaleString('en', {
              style: 'currency',
              currency: 'USD',
            })}
          </h3>
          <button
            onClick={emptyCartHandler}
            type='button'
            className='inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-bold rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <TrashIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
            Empty Cart
          </button>
        </div>
        <div className='flex justify-between mt-10'>
          <button
            onClick={() => router.push(`/marketplace/${companyData[0].id}`)}
            type='button'
            className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          >
            Back to Store
          </button>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
};

export default CartPage;
