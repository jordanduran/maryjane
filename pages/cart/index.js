import CartList from '../../components/cart/CartList';
import { useCart } from '../../store/CartContext';

const CartPage = () => {
  const cartProducts = useCart();

  return (
    <div>
      <CartList />
    </div>
  );
};

export default CartPage;
