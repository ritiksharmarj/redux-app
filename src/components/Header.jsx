import { Link } from 'react-router-dom';

const Header = () => (
  <header className='sticky top-0 z-30 bg-stone-800 bg-opacity-50 backdrop-blur backdrop-filter'>
    <div className='mx-auto max-w-7xl xl:px-8'>
      <div className='flex items-center justify-between border-b border-stone-500 py-5 px-4 sm:px-6 lg:px-8 xl:px-0'>
        <Link to='/' className='font-bold text-xl'>
          REDUX STORE
        </Link>

        <div className='flex items-center gap-10 font-semibold'>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>

          <span>Cart items: 0</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
