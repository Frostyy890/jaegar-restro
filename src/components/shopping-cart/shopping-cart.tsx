import React from "react";
import "./shopping-cart.styles.scss";
import { formatCurrency } from "../../utils/formatCurrency";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import CartItem from "../cart-item/cart-item";
import { setSelectedOption } from "../menu/options-slice";

const ShoppingCart = () => {
  const options = ["Dine in", "To go", "Delivery"];
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  console.log(cartItems);
  const total = cartItems.reduce(
    (result, item) => result + (item?.price || 0) * (item?.quantity || 0),
    0
  );
  const selectedOption = useSelector(
    (state: RootState) => state.option.selectedOption
  );

  const handleClick = (buttonOpt: string) => {
    dispatch(setSelectedOption(buttonOpt));
  };

  return (
    <div id="cart">
      {/* Cart-Header */}
      <div className="cart-header">
        <p className="order-num">Orders #34562</p>
        <div className="header-buttons">
          {options.map((button) => (
            <button
              key={button}
              type="button"
              className={selectedOption === button ? "active" : ""}
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
          {/* <button type="button">Dine in</button>
          <button type="button">To go</button>
          <button type="button">Delivery</button> */}
        </div>
        <div className="header-titles">
          <p className="title">Item</p>
          <div className="price-qty">
            <p className="title">Qty</p>
            <p className="title">Price</p>
          </div>
        </div>
      </div>

      {/* Cart-Body */}
      <div className="cart-body">
        {cartItems.map((cartItem) => (
          <div className="cart-item" key={cartItem.id}>
            {/* Item-Details */}
            <CartItem {...cartItem} />
          </div>
        ))}
      </div>

      {/* Cart-Footer */}
      <div className="cart-footer">
        <div className="discount-row">
          <p className="sm-title">Discount</p>
          <p className="discount">{formatCurrency(0)}</p>
        </div>
        <div className="total-row">
          <p className="sm-title">Sub Total</p>
          <p className="total">{formatCurrency(total)}</p>
        </div>
        <button>Continue to payment</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
