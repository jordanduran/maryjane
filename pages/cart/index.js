import CartList from '../../components/cart/CartList';
import { useCart } from '../../store/CartContext';

const CartPage = () => {
  const cartProducts = useCart();

  console.log(cartProducts);

  return (
    <div>
      <CartList />
    </div>
  );
};

export default CartPage;
