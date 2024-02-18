import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart-slice";
import mealsReducer from './meals/meal-slice'
import authReducer from "./auth/auth-slice"
import categoriesReducer from "./categories/categories-slice";
import { useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    meals: mealsReducer,
    auth: authReducer,
    categories: categoriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
