import { useCart } from '../../store/CartContext';
import CartItem from './CartItem';

const CartList = (props) => {
  const cartProducts = useCart();

  console.log(cartProducts);

  return (
    <div className='shadow overflow-hidden rounded-md mx-2 my-6'>
      <ul className='divide-y divide-gray-200'>
        {cartProducts.map((product) => (
          <CartItem
            key={product.product.productKey}
            keyId={product.product.productKey}
            id={product.product.productId}
            productName={product.product.productName}
            productType={product.product.productType}
            productImage={product.product.productImage}
            selectedQuantity={product.product.quantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
