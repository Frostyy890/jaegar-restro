import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./auth-actions";
import { Meal } from "../meals/meals-actions";

export interface item {
  _id?: string;
  productId: Meal;
  quantity: number;
}

export interface userInfo {
  username?: string;
  email: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  cartItems: item[];
}

interface Auth {
  loading: boolean;
  success: boolean;
  message: string | null;
  token: string | null;
  user: User | null;
  error: string | null;
}

const initialState: Auth = {
  loading: false,
  message: null,
  success: false,
  token: localStorage.getItem("token"),
  user: null,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("cartItems");
      localStorage.removeItem("initialCartItems");
      state.loading = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.message = payload.message;
      localStorage.setItem("userId", payload.newUser._id);
      localStorage.setItem("token", payload.token);
      state.success = true;
      state.user = payload.existingUser;
    });
    builder.addCase(registerUser.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "Uknown error";
      state.message = "Account already in use";
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.existingUser;
      state.message = payload.message;
      state.success = true;
      localStorage.setItem("userId", payload.existingUser._id);
      localStorage.setItem("token", payload.token);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(payload.existingUser.cartItems)
      );
      localStorage.setItem(
        "initialCartItems",
        JSON.stringify(payload.existingUser.cartItems)
      );
    });
    builder.addCase(loginUser.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "Unknown error";
    });
  },
});
export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
