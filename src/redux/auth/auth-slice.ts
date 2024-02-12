import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './auth-actions';
import { Meal } from '../meals/meals-actions';

interface items {
    productId: Meal,
    quantity: number,
}


export interface userInfo {
    _id?: string
    username?: string,
    email: string,
    password: string,
    cartItems?: items[],
}

interface Auth {
    loading: boolean,
    success: boolean,
    message: string | null,
    token: string | null,
    user: userInfo  | null,
    error: string | null,
} 

const initialState: Auth = {
    loading: false,
    message: null,
    success: false,
    token: localStorage.getItem("token"),
    user: null,
    error: null,
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        state.loading = false;
        state.user = null;
        state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.token = payload.token;
        state.message = payload.message;
        localStorage.setItem("userId", payload.newUser._id)
        localStorage.setItem("token", payload.token)
        state.success = true;
        state.user = payload.existingUser;
    });
    builder.addCase(registerUser.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message || "Uknown error";
        state.message = "Account already in use"
    });

    builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.token = payload.token
        state.message = payload.message
        localStorage.setItem("userId", payload.existingUser._id)
        localStorage.setItem("token", payload.token)
        state.success = true;
        state.user = payload.existingUser;
        console.log("user", payload.existingUser)
    });
    builder.addCase(loginUser.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message || "Unknown error"
    })
  }
});
export const {logout} = AuthSlice.actions;
export default AuthSlice.reducer;