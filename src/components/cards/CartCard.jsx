import { useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';

const CartCard = ({ product }) => {
  const dispath = useDispatch();

  const handleRemove = (productId) => {
    dispath(remove(productId));
  };

  return (
    <div className='flex flex-row items-center justify-between bg-stone-50 text-stone-900 rounded-lg p-6 gap-6'>
      <div className='flex flex-row items-center gap-6'>
        <img
          src={product.image}
          alt={product.title}
          loading='lazy'
          className='w-12 object-contain'
        />
        <h3 className='font-bold'>{product.title}</h3>
      </div>

      <div className='flex flex-row items-center gap-10'>
        <span className='font-semibold text-2xl'>$ {product.price}</span>
        <button
          onClick={() => handleRemove(product.id)}
          className='bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
