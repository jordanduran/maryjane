const CartItem = () => {

  return (
    <>
      <li className='px-6 py-4'>
        <div className='mr-4 flex-shrink-0 self-center'>
          <svg
            className='inline-flex h-10 w-10 border border-gray-300 bg-white text-gray-300 mr-2'
            preserveAspectRatio='none'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 200 200'
            aria-hidden='true'
          >
            <path
              vectorEffect='non-scaling-stroke'
              strokeWidth='1'
              d='M0 0l200 200M0 200L200 0'
            />
            <img src='' />
          </svg>
          <span className='text-gray-900'>
            {/* {cartProducts.productData.product.productName} */}
          </span>
        </div>
      </li>
    </>
  );
};

export default CartItem;
