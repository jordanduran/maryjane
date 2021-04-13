import CartList from '../../components/cart/CartList';
import { useCart } from '../../store/CartContext';

const CartPage = () => {
  const cartProducts = useCart();

  return (
    <div>
      <div className='pb-5 my-5 border-b border-gray-200'>
        <h3 className='text-2xl leading-6 font-semibold text-gray-800'>
          Shopping Cart
        </h3>
      </div>
      <CartList />
    </div>
  );
};

export default CartPage;
