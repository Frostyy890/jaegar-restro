import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../meals/meals-actions";


const baseURL = "http://localhost:4000/";
export const getCategories = createAsyncThunk<Category[]>("categories/getCategories", async () => {
    const response = await axios.get<Category[]>(`${baseURL}categories/categories`, {headers: {authorization: localStorage.getItem("token")}});
    return response.data;
})
