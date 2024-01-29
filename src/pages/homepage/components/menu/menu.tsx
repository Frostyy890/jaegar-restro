import React, { useEffect, useState } from "react";
import "./menu.styles.scss";
import axios from "axios";
import MenuItem from "./menu-item/menu-item";
import { useAppSelector } from "../../../../redux/store";
import { useAppDispatch } from "../../../../redux/store";
import { Meal, fetchMeals } from "../../../../redux/meals/meal-slice";
import { addToCart } from "../../../../redux/cart/cart-slice";
import { useToast } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomSelect from "../../../../custom-components/styled-components/custom-select";

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
    dispatch(fetchMeals());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
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
          icon={
            <RiArrowDropDownLine style={{ width: "20px", height: "20px" }} />
          }
        />
      </div>
      <div id="menu-grid">
        {filteredDishes.map((item) => (
          <div
            className="menu-item"
            onClick={() => addItem(item)}
            key={item.id}
          >
            <MenuItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
