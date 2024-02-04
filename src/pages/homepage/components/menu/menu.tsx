import React, { useEffect, useState } from "react";
import "./menu.styles.scss";
import axios from "axios";
import MenuItem from "./menu-item/menu-item";
import { useAppSelector } from "../../../../redux/store";
import { useAppDispatch } from "../../../../redux/store";
import { Meal } from "../../../../redux/meals/meals-actions";
import { addToCart } from "../../../../redux/cart/cart-slice";
import { useToast } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomSelect from "../../../../custom-components/styled-components/custom-select";
import { KeyboardArrowDown } from "@mui/icons-material";
import { getMeals } from "../../../../redux/meals/meals-actions";

interface MenuProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { filteredDishes, loading, error } = useAppSelector(
    (state) => state.meals
  );

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  if (loading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  const addItem = (meal: Meal) => {
    dispatch(addToCart(meal));
    toast({
      title: "Added item",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <section id="menu" className="container section">
      <div className="options-container">
        <p>Choose Dishes</p>
        <CustomSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          icon={<KeyboardArrowDown style={{ width: "30px", height: "25px" }} />}
        />
      </div>
      <div id="menu-grid">
        {error ? (
          <div className="err__msg">ERROR: {error}</div>
        ) : (
          filteredDishes.map((item) => (
            <div
              className="menu-item"
              onClick={() => addItem(item)}
              key={item._id}
            >
              <MenuItem {...item} />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Menu;
