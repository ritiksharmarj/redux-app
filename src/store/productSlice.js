import { createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

// Create a slice with a reducer to handle the `fetchUserData` action
const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.productData = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Create an asynchronous thunk to fetch data from an API
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
