import React from 'react';

const ProductCard = ({ product }) => (
  <div className='flex flex-col items-center bg-stone-50 text-stone-900 rounded-lg p-6 gap-6'>
    <img
      src={product.image}
      alt={product.title}
      loading='lazy'
      className='h-40 object-contain'
    />

    <div className='flex flex-col items-center gap-3'>
      <h3 className='font-bold text-center'>{product.title}</h3>
      <span className='font-semibold text-2xl'>$ {product.price}</span>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Add to cart
      </button>
    </div>
  </div>
);

export default ProductCard;
