import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export interface Meal {
    id: number;
    name: string;
    price: number;
    available: number;
    imgUrl: string;
    categories: string[];
    quantity: number;
  }

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


const baseUrl = "http://localhost:7000/";
export const fetchMeals = createAsyncThunk<Meal[]>("meals/fetchMeals", async () => {
  const response = await axios.get<Meal[]>(`${baseUrl}dishes`);
  return response.data;
}
);


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
            const filteredDishes = state.dishes.filter((dish) => dish.categories.includes(action.payload))
            return {
                ...state,
                filteredDishes:
                action.payload === "All" ? [...state.dishes] : filteredDishes
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMeals.pending, (state) => {
            state.loading = true;
            state.error = null;
            console.log("Pending");
        });

        builder.addCase(fetchMeals.fulfilled, (state, action) => {
            state.loading = false;
            state.dishes = action.payload;
            state.filteredDishes = action.payload;
            console.log("Fulfilled");
            console.log(state.dishes);
        });

        builder.addCase(fetchMeals.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Unknown error';
            console.log("Rejected");
        });
    },
});  

export const {filterByName, filterByCategory} = mealsSlice.actions;

export default mealsSlice.reducer;