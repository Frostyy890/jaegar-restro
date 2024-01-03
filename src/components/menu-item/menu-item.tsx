import React from "react";
import "./menu-item.styles.scss";
import { formatCurrency } from "../../utils/formatCurrency";

type MenuItemProps = {
  name: string;
  price: number;
  available: number;
  imgUrl: string;
};

const MenuItem = ({ name, price, available, imgUrl }: MenuItemProps) => {
  return (
    <div className="card">
      <img
        src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042"
        alt=""
      />
      <div className="card-details">
        <span className="name">{name}</span>
        <span className="price">{formatCurrency(price)}</span>
        <span className="available">{available} Bowls Available</span>
      </div>
    </div>
  );
};

export default MenuItem;
