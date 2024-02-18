import React from "react";
import "./cart-item.styles.scss";
import Delete from "../../../../../assets/icons/Trash.svg";
import { formatCurrency } from "../../../../../utils/formatCurrency";
import { removeCartItem } from "../../../../../redux/cart/cart-slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { item } from "../../../../../redux/auth/auth-slice";

const CartItem = ({ productId, quantity }: item) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const deleteItem = (itemId: string) => {
    dispatch(removeCartItem(itemId));
    toast({
      title: "Item removed",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };
  return (
    <div className="item">
      <div className="item-details">
        <div className="details-col1">
          <img
            src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042"
            alt="meal"
            className="meal-image"
          />
          <div className="name-price">
            <p className="item-name">{productId.name}</p>
            <p className="sm-price">{formatCurrency(productId.price)}</p>
          </div>
        </div>
        <div className="details-col2">
          <p className="count">{quantity}</p>
          <p className="tot-price">
            {formatCurrency(productId.price * quantity)}
          </p>
        </div>
      </div>
      {/* Item-Notes and Delete Button */}
      <div className="notes-del">
        <input type="text" className="note" placeholder="Order Note..." />
        <button type="button" onClick={() => deleteItem(productId._id)}>
          <img src={Delete} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
