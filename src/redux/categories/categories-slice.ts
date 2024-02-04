import { createSlice } from '@reduxjs/toolkit'
import { Category } from '../meals/meals-actions';
import { getCategories } from './categories-actions';

interface CategoriesState {
    categories: Category[],
    loading: boolean,
    error: string | null,
}

const initialState: CategoriesState = {
    categories: [],
    loading: false,
    error: null
}

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.categories = payload;
    });
    builder.addCase(getCategories.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message || "Unknown Error";
    })
  }
});

export const {} = CategoriesSlice.actions

export default CategoriesSlice.reducer