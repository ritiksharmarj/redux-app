import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import store from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
