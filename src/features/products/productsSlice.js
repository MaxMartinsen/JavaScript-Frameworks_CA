import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, ONLINE_SHOP } from '../../utils/constants';
import { tagUtils } from '../../utils/tagUtils';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(`${BASE_URL}${ONLINE_SHOP}`);
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
    filtered: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    filteredByPrice: (state, action) => {
      state.filtered = state.items.filter(
        ({ price }) => price < action.payload
      );
    },
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

export const { filteredByPrice } = productsSlice.actions;

export default productsSlice.reducer;
