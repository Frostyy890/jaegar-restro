import React, { useState, ChangeEvent, useEffect } from "react";
import "./header.styles.scss";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { filterByName } from "../menu/meal-slice";

interface headerProps {
  onFilter: (filterValue: string) => void;
}

const Header: React.FC = () => {
  const dispatch = useDispatch();
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
          <input
            type="text"
            className="search-input"
            placeholder="Search for food, coffee, etc.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
