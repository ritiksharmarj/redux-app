import { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className='grid grid-cols-4 gap-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
