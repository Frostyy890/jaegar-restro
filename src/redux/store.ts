import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cart-slice'
import mealsReducer from './meals/meal-slice'
import optionsReducer from "./options/options-slice";
import authReducer from "./auth/auth-slice"
import { useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    meals: mealsReducer,
    option: optionsReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;