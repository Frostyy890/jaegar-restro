import React, { useState, ChangeEvent, useEffect } from "react";
import "./header.styles.scss";
import { FiSearch } from "react-icons/fi";
import { useAppDispatch } from "../../redux/store/store";
import { filterByName } from "../../redux/meals/meal-slice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(filterByName(query));
  }, [query, dispatch]);

  const today = new Date();
  const date = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  });
  return (
    <header className="header container">
      <div className="top-container container">
        <div className="name-date-col">
          <h3 className="name">Jaegar Restro</h3>
          <span className="date">{date.format(today)}</span>
        </div>
        <div className="input-col">
          <FiSearch
            style={{
              width: "35px",
              position: "absolute",
              top: "42.5px",
              zIndex: "99",
            }}
          />
          <input
            type="text"
            className="search-input"
            placeholder="Search for food, coffee, etc.."
            value={query}
            // style={{ position: "relative" }}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
