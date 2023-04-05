import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <section className='mx-auto max-w-7xl'>
      <div className='px-4 sm:px-6 lg:px-8 py-8'>
        <Products />
      </div>
    </section>
  );
};

export default Home;
