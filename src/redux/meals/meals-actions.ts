import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Category {
    _id: string,
    name: string
}

export interface Meal {
    _id: string,
    name: string,
    price: number,
    available: number,
    imgUrl: string,
    categories: Category[],
    quantity: number
}



const baseURL = "http://localhost:4000/";
export const getMeals = createAsyncThunk<Meal[]>("meals/getMeals", async () => {
    const response = await axios.get<Meal[]>(`${baseURL}meals/meals`, {headers: {authorization: localStorage.getItem("token")}});
    return response.data;
})
