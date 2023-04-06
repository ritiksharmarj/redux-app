import { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';
import { STATUSES, fetchProductData } from '../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { productData: products, status } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductData());

    // const getProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // getProducts();
  }, []);

  if (status === STATUSES.LOADING)
    return <span className='font-bold text-xl'>Loading...</span>;

  if (status === STATUSES.ERROR)
    return (
      <span className='font-bold text-xl'>
        Something went wrong. Try again!
      </span>
    );

  return (
    <div className='grid lg:grid-cols-4 grid-cols-3 gap-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
