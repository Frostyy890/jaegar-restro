import React from "react";
import "./card.styles.scss";
import Coin from "../../../../assets/icons/Coin.svg";
import UpArrow from "../../../../assets/icons/Arrow - Up.svg";
import { formatCurrency } from "../../../../utils/formatCurrency";

const StatCard = () => {
  const data = [
    {
      icon: "",
      stats: 23456,
      trend: { value: 12.4, icon: "" },
    },
  ];

  return (
    <div className="stat-card">
      <div className="cardHeader">
        {/* Icon */}
        <span className="cardIcon">
          <img src={Coin} alt="" />
        </span>
        <div className="profit">
          <p className="percentage">+32.40%</p>
          <span>
            <img src={UpArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="cardBody">{formatCurrency(10243.0)}</div>
      <div className="cardFooter">
        <span>Total Revenue</span>
      </div>
    </div>
  );
};

export default StatCard;
