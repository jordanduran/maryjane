const CartItem = (props) => {
  console.log(props);

  return (
    <>
      <li className='px-4 py-4'>
        <div className='mr-4 flex justify-between flex-shrink-0'>
          <div className='flex items-center'>
            <img
              className='inline-flex h-14 w-14 border border-gray-300 bg-gray-50 text-gray-300 mr-2'
              src={props.productImage}
            />

            <span className='text-gray-800 font-bold text-xl'>
              {props.productName}
              <span className='block text-green-700 font-bold text-xs'>
                ({props.productType})
              </span>
            </span>
          </div>
          <div className='flex items-center'>
            <div className='flex flex-col text-center'>
              <span className='text-gray-800 font-semibold md:font-bold md:text-sm'>
                Qty
              </span>
              <span className='text-gray-800 font-bold md:text-3xl m-2'>
                {props.selectedQuantity.qty}
              </span>
            </div>
            <div className='flex flex-col text-center ml-4 divide-x-2 divide-solid'>
              <span className='text-gray-800 font-semibold md:text-sm'>
                Price
              </span>
              <span className='text-green-500 font-bold md:text-3xl m-2 px-2 md:px-4'>
                $
                {props.selectedQuantity.selectedQtyPrice *
                  props.selectedQuantity.qty}
              </span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
