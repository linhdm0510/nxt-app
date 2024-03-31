import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productListService from './services';

const fetchList = createAsyncThunk(
  'users/fetchByIdStatus',
  async (thunkAPI) => {
    const response = await productListService.getList();
    return response.data;
  }
);

const initialState = {
  list: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // setListProduct,
  },
});

// Action creators are generated for each case reducer function
// export const { setListProduct } = productSlice.actions;

export default productSlice.reducer; // should be imported to global store
