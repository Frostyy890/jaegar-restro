import { createAsyncThunk } from "@reduxjs/toolkit";
import { userInfo } from "./auth-slice";
import axios from "axios";


const baseUrl = "http://localhost:4000/";
export const registerUser = createAsyncThunk("auth/registerUser", async (user: userInfo)=> 
       await axios.post(`${baseUrl}signup`, user, {withCredentials: true}).then(res => res.data))

export const loginUser = createAsyncThunk("auth/loginUser", async (user: userInfo)=> 
    await axios.post(`${baseUrl}login`, user, {withCredentials: true}).then(res => res.data)
)