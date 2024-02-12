import React, { useEffect, useState } from "react";
import "./navbar.styles.scss";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { filterByCategory } from "../../../../redux/meals/meal-slice";
import { getCategories } from "../../../../redux/categories/categories-actions";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { categories, error } = useAppSelector((state) => state.categories);
  const [active, setActive] = useState<string>("default");
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClick = (category: string, _id: string) => {
    dispatch(filterByCategory(category));
    setActive(_id);
  };
  return (
    <nav id="navbar">
      <div className="nav-container">
        <ul className="nav-list">
          <li
            className={`nav-item ${active === "default" ? "nav-active" : ""}`}
            onClick={() => handleClick("All", "default")}
          >
            All
          </li>
          {error ? (
            <div className="err__msg">ERROR: {error}</div>
          ) : (
            categories.map((category) => (
              <li
                className={`nav-item ${
                  active === category._id ? "nav-active" : ""
                }`}
                key={category._id}
                onClick={() => handleClick(category.name, category._id)}
              >
                {category.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
