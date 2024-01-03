import React, { useEffect, useState } from "react";
import "./menu.styles.scss";
import axios from "axios";
import MenuItem from "../menu-item/menu-item";
import CustomSelector from "../../custom-components/styled-components/custom-selector";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Meal, fetchMeals } from "./meal-slice";
import { addToCart } from "../shopping-cart/cart-slice";
import { useToast } from "@chakra-ui/react";

interface MealProps {
  meal: Meal;
}

const Menu: React.FC = () => {
  const options = ["Dine in", "To go", "Delivery"];
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const { filteredDishes, loading, error } = useSelector(
    (state: RootState) => state.meals
  );

  useEffect(() => {
    dispatch(fetchMeals());
  }, []);

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
        <h3>Choose Dishes</h3>
        <CustomSelector options={options} />
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
