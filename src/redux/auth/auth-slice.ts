import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './auth-actions';


export interface userInfo {
    username?: string,
    email: string,
    password: string,
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
        state.token = payload.token
        state.message = payload.message
        console.log(payload)
        localStorage.setItem("token", payload.token)
        state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message || "Uknown error";
    });

    builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.token = payload.token
        state.message = payload.message
        console.log(payload)
        localStorage.setItem("token", payload.token)
        state.success = true;
    });
    builder.addCase(loginUser.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message || "Unknown error"
    })
  }
});
export const {logout} = AuthSlice.actions;
export default AuthSlice.reducer;