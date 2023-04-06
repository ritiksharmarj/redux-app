import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Create an asynchronous thunk to fetch data from an API
export const fetchProductData = createAsyncThunk(
  'product/fetchProductData', // identifier
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
  }
);

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

// Create a slice with a reducer to handle the `fetchProductData` action
const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.productData = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProductData.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Old Thunk Way
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));

//     try {
//       const res = await fetch('https://fakestoreapi.com/products');
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
