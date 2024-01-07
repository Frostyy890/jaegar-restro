import React, { useState } from "react";
import "./custom-selector.styles.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAppDispatch } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setSelectedOption } from "../../redux/options/options-slice";
import { useClickOutside } from "../../hooks/useClickOutside";

interface CustomSelectorProps {
  options: string[];
}

const CustomSelector: React.FC<CustomSelectorProps> = ({ options }) => {
  const dispatch = useAppDispatch();
  const selectedOption = useSelector(
    (state: RootState) => state.option.selectedOption
  );
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(
  //   options[0] || "Choose an option"
  // );

  const handleOptionSelect = (option: string) => {
    dispatch(setSelectedOption(option));
    setIsOpen(false);
  };

  const ref = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div className="custom-selector" ref={ref}>
      <div className="selector-header" onClick={() => setIsOpen(!isOpen)}>
        <span>
          <RiArrowDropDownLine style={{ width: "20px", height: "20px" }} />
        </span>
        {selectedOption}
      </div>
      <ul className={`options-list  ${isOpen ? "open" : ""}`}>
        {options.map((option) => (
          <li key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelector;
