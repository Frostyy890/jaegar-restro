import React, { useState } from "react";
import "./ordered-by-type.styles.scss";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import CustomSelect from "../../../../../custom-components/styled-components/custom-select";
import { KeyboardArrowDown } from "@mui/icons-material";
import data from "./data";

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
          icon={<KeyboardArrowDown style={{ width: "30px", height: "25px" }} />}
        />
      </div>
      <div className="byType-body"></div>
    </div>
  );
};

export default OrderedByType;
