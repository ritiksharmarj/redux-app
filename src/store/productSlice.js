import { createSlice } from '@reduxjs/toolkit';

// Create an asynchronous thunk to fetch data from an API

const STATUSES = Object.freeze({
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
});
