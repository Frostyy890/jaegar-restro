import React, { useState } from "react";
import "./ordered-by-name.styles.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomSelect from "../../../../../custom-components/styled-components/custom-select";

const OrderedByName = () => {
  const options = ["Today", "Week ago", "Month ago"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  return (
    <div className="byName">
      <div className="byName-header">
        <p className="title">Most Ordered</p>
        <CustomSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          icon={
            <RiArrowDropDownLine style={{ width: "20px", height: "20px" }} />
          }
        />
      </div>
      {/* Body */}
      <div className="byName-body">
        {/* Item 1 */}
        <div className="body-item">
          <img
            src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042"
            alt=""
            className="meal-image"
          />
          <div className="name-amount">
            <p>Spicy seasoned seafood noodles</p>
            <span>200 dishes ordered</span>
          </div>
        </div>
        {/* Item 2 */}
        <div className="body-item">
          <img
            src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042"
            alt=""
            className="meal-image"
          />
          <div className="name-amount">
            <p>Spicy seasoned seafood noodles</p>
            <span>200 dishes ordered</span>
          </div>
        </div>
        {/* Item 3 */}
        <div className="body-item">
          <img
            src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042"
            alt=""
            className="meal-image"
          />
          <div className="name-amount">
            <p>Spicy seasoned seafood noodles</p>
            <span>200 dishes ordered</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="byName-footer">
        <button type="button">View all</button>
      </div>
    </div>
  );
};

export default OrderedByName;
