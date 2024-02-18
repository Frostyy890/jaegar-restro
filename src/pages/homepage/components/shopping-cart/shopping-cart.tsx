import React from "react";
import "./shopping-cart.styles.scss";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { useAppSelector } from "../../../../redux/store";
import CartItem from "./cart-item/cart-item";

interface ShoppingCartProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((result, item) => {
    const subtotal = item.productId.price * item.quantity;
    return result + subtotal;
  }, 0);

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div id="cart">
      {/* Cart-Header */}
      <div className="cart-header">
        <p className="order-num">Orders #34562</p>
        <div className="header-buttons">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={selectedOption === option ? "active" : ""}
              onClick={() => handleClick(option)}
            >
              {option}
            </button>
          ))}
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
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <CartItem {...item} />
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
