import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Meal, getMeals } from "./meals-actions";

  interface MealsState {
    dishes: Meal[],
    filteredDishes: Meal[],
    loading: boolean,
    error: string | null,
  }



const initialState: MealsState = {
    dishes: [],
    filteredDishes: [],
    loading: false,
    error: null
}


const mealsSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        filterByName: (state, action: PayloadAction<string>) => {
            const filteredDishes = state.dishes.filter((dish) => dish.name.toLowerCase().includes(action.payload.toLowerCase()));
            return {
                ...state,
                filteredDishes: 
                action.payload.length > 0 ? filteredDishes : [...state.dishes]
            };
        },
        filterByCategory: (state, action: PayloadAction<string>) => {
           const filteredDishes = state.dishes
           .filter(dish => {return dish.categories
            .some(category => category.name
                .includes(action.payload))})
            // const filteredDishes = state.dishes.filter((dish) => dish.categories.includes(action.payload))
            return {
                ...state,
                filteredDishes:
                action.payload === "All" ? [...state.dishes] : filteredDishes
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMeals.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getMeals.fulfilled, (state, action) => {
            state.loading = false;
            state.dishes = action.payload;
            state.filteredDishes = action.payload;
        });

        builder.addCase(getMeals.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Unknown error';
        });
    },
});  

export const {filterByName, filterByCategory} = mealsSlice.actions;

export default mealsSlice.reducer;