import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { item } from "../auth/auth-slice";
import { Meal } from "../meals/meals-actions";

interface CartState {
  cartItems: item[];
}

const cartItemsJSON = localStorage.getItem("cartItems");
const updateStoredCartItems = (updatedCartItems: item[]) => {
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

const initialState: CartState = {
  cartItems: cartItemsJSON ? JSON.parse(cartItemsJSON) : [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<item[]>) => {
      state.cartItems = action.payload;
    },
    addCartItem: (state, action: PayloadAction<Meal>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.productId._id === action.payload._id
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
          updateStoredCartItems([...state.cartItems]);
        }
      } else {
        state.cartItems.push({ productId: action.payload, quantity: 1 });
        updateStoredCartItems([...state.cartItems]);
      }
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId._id !== action.payload
      );
      updateStoredCartItems(
        state.cartItems.filter((item) => item.productId._id !== action.payload)
      );
    },
  },
});

export const { setCartItems, addCartItem, removeCartItem } = CartSlice.actions;

export default CartSlice.reducer;
