import React from "react";
import "./navbar.styles.scss";
import { useAppDispatch } from "../../redux/store/store";
import { filterByCategory } from "../../redux/meals/meal-slice";

interface NavbarProps {
  categories: string[];
}

const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  const dispatch = useAppDispatch();

  const handleClick = (category: string) => {
    dispatch(filterByCategory(category));
  };
  return (
    <nav id="navbar">
      <div className="nav-container container">
        <ul className="nav-list">
          {categories.map((category, index) => (
            <li
              className="nav-item"
              key={index}
              onClick={() => handleClick(category)}
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
