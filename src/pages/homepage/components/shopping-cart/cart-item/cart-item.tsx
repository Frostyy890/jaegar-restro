import React from "react";
import "./cart-item.styles.scss";
import Delete from "../../../../../assets/icons/Trash.svg";
import { formatCurrency } from "../../../../../utils/formatCurrency";
import { removeFromCart } from "../../../../../redux/cart/cart-slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

interface cartItemProps {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
}

const CartItem: React.FC<cartItemProps> = ({ _id, price, name, quantity }) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const baseURL = "http://localhost:4000/";
  const customerId = localStorage.getItem("userId");
  const { token } = useAppSelector((state) => state.auth);

  const removeItem = async (productId: string) => {
    await axios
      .delete(`${baseURL}users/${customerId}/cartItems/${productId}`, {
        headers: { authorization: token },
      })
      .then((res) => {
        console.log(res.data);
        toast({
          title: res.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return res.data;
      })
      .catch((err) => console.error(err));
  };
  const deleteItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
    removeItem(itemId);
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
            <p className="item-name">{name}</p>
            <p className="sm-price">{formatCurrency(price)}</p>
          </div>
        </div>
        <div className="details-col2">
          <p className="count">{quantity}</p>
          <p className="tot-price">{formatCurrency(price * quantity)}</p>
        </div>
      </div>
      {/* Item-Notes and Delete Button */}
      <div className="notes-del">
        <input type="text" className="note" placeholder="Order Note..." />
        <button type="button" onClick={() => deleteItem(_id)}>
          <img src={Delete} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
