import React, { useState } from "react";
import "./ordered-by-type.styles.scss";
import { ResponsivePie } from "@nivo/pie";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomSelect from "../../../../../custom-components/styled-components/custom-select";

const OrderedByType = () => {
  const options = ["Today", "Week ago", "Month ago"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  return (
    <div className="byType">
      <div className="byType-header">
        <p>Most Type of Order</p>
        <CustomSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          icon={
            <RiArrowDropDownLine style={{ width: "20px", height: "20px" }} />
          }
        />
      </div>
      <div className="byType-body">{/* <ResponsivePie data={data} /> */}</div>
    </div>
  );
};

export default OrderedByType;
