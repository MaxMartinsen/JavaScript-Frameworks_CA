import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, ENDPOINT_ALL_PRODUCTS } from '../../utils/constants';
import { tagUtils } from '../../utils/tagUtils';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(`${BASE_URL}${ENDPOINT_ALL_PRODUCTS}`);
    const json = await response.json();
    const uniqueCategories = tagUtils(json.data);
    return {
      products: json.data,
      tags: uniqueCategories,
    };
  }
);
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    categories: [],
    //  filtered [],
    //  related [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.products;
        state.categories = action.payload.tags;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
