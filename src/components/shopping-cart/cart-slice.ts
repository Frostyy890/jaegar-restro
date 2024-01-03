import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Meal {
  id: number;
  name: string;
  price: number;
  available: number;
  imgUrl: string;
  categories: string[];
  quantity: number;
}

interface cartState {
  cartItems: Meal[];
}


const initialState: cartState = {
  cartItems: [], //by default cartItems are an empty array
};

const CartSlice = createSlice({
  name: "cart", //any name works, as long as it makes sense
  initialState, //accepts an initialState of the cart
  reducers: {
    //basically actions, functions to manipulate cart items e.g: add/remove items
    //PayloadAction<Meal> means we want our action to inherit the types of our Meal items
    //Here we're creating functions that are going to add/remove items from the cart
    addToCart: (state, action: PayloadAction<Meal>) => {
      // const {id, name, price, available, imgUrl, categories } = action.payload;
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id)
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.cartItems.push({...action.payload, quantity: 1})
      }
       //means we want our cartItems array accept an item that shares our payload's types as in Meal
      console.log("Added")
    },
    //Here our Payload is gonna be of number type because removing logic involves working with specifically with Meal's id
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const existingItemIndex = state.cartItems.findIndex((item) => item.id = id)
      if (existingItemIndex !== -1) {
        const item = state.cartItems[existingItemIndex];
        if(item.quantity > 1) {
          item.quantity--;
        } else {
        state.cartItems.splice(existingItemIndex, 1)
      }
    }
      console.log("Removed")
      // if an id of an item doesn't match with those that are supposed to be in the cart than that item is to be removed from the cart
    }
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
