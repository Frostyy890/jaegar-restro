import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../components/shopping-cart/cart-slice'
import mealsReducer from '../components/menu/meal-slice'
import optionsReducer from "../components/menu/options-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    meals: mealsReducer,
    option: optionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
