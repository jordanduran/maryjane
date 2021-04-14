import { useDispatchCart } from '../../store/CartContext';

const CartItem = (props) => {
  const dispatch = useDispatchCart();

  const removeProductHandler = (keyId) => {
    console.log(keyId);
    dispatch({ type: 'DELETE', keyId });
  };

  console.log(props);

  return (
    <>
      <li className='px-2 py-4'>
        <div className='mr-4 flex justify-between flex-shrink-0'>
          <div className='flex items-center'>
            <img
              className='inline-flex h-14 w-14 border border-gray-300 bg-gray-50 text-gray-300 mr-2'
              src={props.productImage}
            />

            <span className='text-gray-800 font-bold text-sm w-1/5'>
              {props.productName}
              <span className='uppercase block text-green-700 font-bold text-xs'>
                (
                {props.selectedQuantity.selectedQty === 'quarter'
                  ? 'qtr'
                  : props.selectedQuantity.selectedQty}
                )
              </span>
            </span>
          </div>
          <div className='flex flex-col text-center mr-2'>
            <span className='text-gray-800 text-xs font-semibold md:font-bold md:text-sm mb-2'>
              Qty
            </span>
            <span className='text-green-600 font-bold md:text-3xl'>
              {props.selectedQuantity.qty}
            </span>
          </div>
          <div className='flex flex-col text-center mx-2'>
            <span className='text-gray-800 text-xs font-semibold md:font-bold md:text-sm mb-2'>
              Price
            </span>
            <span className='text-green-600 font-bold md:text-3xl'>
              $
              {props.selectedQuantity.selectedQtyPrice *
                props.selectedQuantity.qty}
            </span>
          </div>
          <div className='flex items-center pl-2 '>
            <button
              onClick={() => removeProductHandler(props.keyId)}
              className='text-red-600'
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
