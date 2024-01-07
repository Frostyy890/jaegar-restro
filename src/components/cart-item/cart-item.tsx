import React from "react";
import "./cart-item.styles.scss";
import Delete from "../../assets/icons/Trash.svg";
import { formatCurrency } from "../../utils/formatCurrency";
import { removeFromCart } from "../../redux/cart/cart-slice";
import { useAppDispatch } from "../../redux/store/store";
import { useToast } from "@chakra-ui/react";

interface cartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
}

const CartItem: React.FC<cartItemProps> = ({ id, price, name, quantity }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const deleteItem = (itemId: number) => {
    dispatch(removeFromCart(itemId));
    toast({
      title: "Removed Item",
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
        <button type="button" onClick={() => deleteItem(id)}>
          <img src={Delete} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
