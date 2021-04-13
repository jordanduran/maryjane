import { useCart } from '../../store/CartContext';
import CartItem from './CartItem';

const CartList = (props) => {
  const cartProducts = useCart();

  console.log(cartProducts);

  // Map over cartProducts and pass it to CartItem as props

  return (
    <div className='shadow overflow-hidden rounded-md mx-2 my-4'>
      <ul className='divide-y divide-gray-200'>
        <CartItem />
      </ul>
    </div>
  );
};

export default CartList;
