import { useDispatchCart } from '../../store/CartContext';

const CartItem = (props) => {
  const dispatch = useDispatchCart();

  const removeProductHandler = (keyId) => {
    dispatch({ type: 'DELETE', keyId });
  };

  return (
    <>
      <li className='px-2 py-4'>
        <div className='mr-4 flex justify-between flex-shrink-0'>
          <div className='flex'>
            <img
              className='inline-flex h-14 w-14 border border-gray-300 bg-gray-50 text-gray-300 mr-2'
              src={props.productImage}
            />

            <span className='capitalize text-gray-800 font-bold text-base w-2/4'>
              {props.productName}
              <span className='uppercase block text-green-700 font-bold text-xs'>
                {props.selectedQuantity.selectedQty === 'quarter'
                  ? `${props.selectedQuantity.qty} qtr(s)`
                  : `${props.selectedQuantity.qty} ${props.selectedQuantity.selectedQty}(s)`}
              </span>
            </span>
          </div>

          <div className='flex justify-center'>
            <div className='flex flex-col items-center mr-10'>
              <span className='text-gray-800 font-bold text-base'>Price</span>
              <span className='uppercase block text-green-700 font-bold text-base'>
                $
                {props.selectedQuantity.selectedQtyPrice *
                  props.selectedQuantity.qty}
              </span>
            </div>

            <button
              onClick={() => removeProductHandler(props.keyId)}
              className='text-red-600 h-5 self-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
