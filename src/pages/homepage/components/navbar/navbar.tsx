import React, { useState } from "react";
import "./navbar.styles.scss";
import { useAppDispatch } from "../../../../redux/store";
import { filterByCategory } from "../../../../redux/meals/meal-slice";

interface NavbarProps {
  categories: string[];
}

const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<number>(0);

  const handleClick = (category: string, index: number) => {
    dispatch(filterByCategory(category));
    setActive(index);
  };
  return (
    <nav id="navbar">
      <div className="nav-container container">
        <ul className="nav-list">
          {categories.map((category, index) => (
            <li
              className={`nav-item ${active === index ? "nav-active" : ""}`}
              key={index}
              onClick={() => handleClick(category, index)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
