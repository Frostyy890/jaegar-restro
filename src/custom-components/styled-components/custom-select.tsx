import React, { ReactNode, useEffect, useState } from "react";
import "./custom-select.styles.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

interface CustomSelectProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  icon: ReactNode;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  icon,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const ref = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div className="custom-selector" ref={ref}>
      <div className="selector-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{icon}</span>
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

export default CustomSelect;
