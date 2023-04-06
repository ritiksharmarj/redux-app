import { useSelector } from 'react-redux';
import CartCard from '../components/cards/CartCard';

const Cart = () => {
  const products = useSelector((state) => state.cart);

  return (
    <section className='mx-auto max-w-7xl'>
      <div className='flex flex-col gap-5 px-4 sm:px-6 lg:px-8 py-8'>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Cart;
