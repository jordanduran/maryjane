import { useState, useEffect, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCannabis,
  faQuestionCircle,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { useCart, useDispatchCart } from '../../store/CartContext';
import { UserContext } from '../../store/userContext';
import AlertContext from '../../store/AlertContext';

const Product = (props) => {
  const [qtyOfProduct, setQtyOfProduct] = useState(0);
  const [selectedQty, setSelectedQty] = useState('gram');
  const { showAlert } = useContext(AlertContext);
  const { loggedInUser } = useContext(UserContext);
  const cartProducts = useCart();
  const dispatch = useDispatchCart();
  const qtyRef = useRef();

  const qtyChangeHandler = () => selectedQty(qtyRef.current.value);

  const incrementQtyHandler = () => {
    if (qtyOfProduct === 10) {
      showAlert({
        title: 'Unsuccessful add to cart.',
        message: `10 is currently the maximum amount you may purchase.`,
        status: 'notice',
      });
      setQtyOfProduct(10);
    } else if (qtyOfProduct <= 10 && qtyOfProduct >= 0) {
      setQtyOfProduct((prevState) => prevState + 1);
    }
  };

  const decrementQtyHandler = () => {
    if (qtyOfProduct > 0) setQtyOfProduct((prevState) => prevState - 1);
  };

  const addToCartHandler = () => {
    const companyProductsInCart = cartProducts.map(
      (product) => product.companyData.id
    );

    if (
      !companyProductsInCart.includes(props.companyData.id) &&
      companyProductsInCart.length > 0
    ) {
      return showAlert({
        title: 'Unsuccessful add to cart.',
        message: `You may only place an order from one vendor at a time.`,
        status: 'error',
      });
    } else if (qtyOfProduct === 0) {
      return showAlert({
        title: 'Unsuccessful add to cart.',
        message: `You must select the quantity you would like before adding to your cart.`,
        status: 'error',
      });
    } else if (props.companyData.userId === loggedInUser.id) {
      return showAlert({
        title: 'Unsuccessful add to cart.',
        message: `You can not purchase from your own store.`,
        status: 'error',
      });
    } else if (qtyOfProduct > 0) {
      let productData = {
        product: {
          productId: props.product.productId,
          productName: props.product.productName,
          productType: props.product.productType,
          productImage: props.product.productImage,
          quantity: {
            selectedQty,
            qty: qtyOfProduct,
          },
        },
        companyData: props.companyData,
      };
      dispatch({ type: 'ADD', productData });
      console.log(productData);
    }

    setSelectedQty('gram');
    setQtyOfProduct(0);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-3'>
      <div className='max-w-3xl mx-auto'>
        <div className='my-auto overflow-hidden shadow rounded-lg divide-y divide-gray-200'>
          <div className='px-4 py-5 sm:p-6'>
            {/* <!-- Content goes here --> */}
            <img
              className='max-h-52 md:max-h-96 md:max-w-screen-md w-full object-cover mx-auto rounded'
              src={props.product.productImage}
            />
          </div>
          <div className='px-4 py-4 sm:px-6'>
            {/* <!-- Content goes here --> */}
            <p className='uppercase font-semibold text-gray-800'>
              <FontAwesomeIcon
                style={{ color: '#059669' }}
                className='fa-1x'
                icon={faCannabis}
              />{' '}
              {props.product.productName}
            </p>
            <p className='uppercase font-semibold text-gray-800'>
              <FontAwesomeIcon
                style={{ color: '#059669' }}
                className='fa-1x'
                icon={faQuestionCircle}
              />{' '}
              {props.product.productType}
            </p>
          </div>
        </div>
        <div className='text-center'>
          <FontAwesomeIcon
            style={{ color: '#34D399' }}
            className='animate-bounce fa-3x mt-8'
            icon={faChevronCircleDown}
          />{' '}
        </div>
        <div className='flex flex-col'>
          <div className='mt-5 text-center grid grid-cols-1 gap-5 sm:grid-cols-1'>
            <div className='px-4 w-full py-5 shadow rounded-lg overflow-hidden sm:p-6'>
              <div>
                <label
                  htmlFor='location'
                  className='block text-base font-semibold text-gray-700'
                >
                  Quantity
                </label>
                <select
                  onChange={() => setSelectedQty(qtyRef.current.value)}
                  ref={qtyRef}
                  id='qty'
                  name='qty'
                  className='my-2 inline-block w-10/12 md:w-6/12 text-center pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md'
                >
                  <option value='gram'>Gram</option>
                  <option value='eighth'>Eighth</option>
                  <option value='quarter'>Quarter</option>
                  <option value='half'>Half</option>
                  <option value='ounce'>Ounce</option>
                </select>
              </div>
              <div className='mb-2 text-green-700 font-bold'>
                (
                {selectedQty === 'gram' ? (
                  <span>${props.product.gram.gramPrice} per gram</span>
                ) : selectedQty === 'eighth' ? (
                  <span>${props.product.eighth.eighthPrice} per eighth</span>
                ) : selectedQty === 'quarter' ? (
                  <span>${props.product.quarter.quarterPrice} per quarter</span>
                ) : selectedQty === 'half' ? (
                  <span>${props.product.half.halfPrice} per half</span>
                ) : selectedQty === 'ounce' ? (
                  <span>${props.product.ounce.ouncePrice} per ounce</span>
                ) : undefined}
                )
              </div>
              <form className='mt-1'>
                <span className='relative z-0 inline-flex shadow-sm rounded-md'>
                  <button
                    onClick={decrementQtyHandler}
                    type='button'
                    className='relative block items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                  >
                    <span className='sr-only'>Previous</span>
                    <svg
                      className='h-5 w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <input
                    onChange={qtyChangeHandler}
                    value={qtyOfProduct}
                    type='text'
                    name='qtyOfProduct'
                    id='qtyOfProduct'
                    className='text-center w-16 shadow-sm focus:ring-green-500 focus:border-green-500 inline-flex sm:text-sm border-gray-300'
                  />
                  <button
                    onClick={incrementQtyHandler}
                    type='button'
                    className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                  >
                    <span className='sr-only'>Next</span>
                    <svg
                      className='h-5 w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </span>
              </form>
            </div>

            <div>
              <button
                onClick={addToCartHandler}
                type='button'
                className='inline-block w-full text-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-80'
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
