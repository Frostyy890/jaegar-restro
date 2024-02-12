import React, { useEffect } from "react";
import "./menu.styles.scss";
import axios from "axios";
import MenuItem from "./menu-item/menu-item";
import { useAppSelector } from "../../../../redux/store";
import { useAppDispatch } from "../../../../redux/store";
import { Meal } from "../../../../redux/meals/meals-actions";
import { addToCart } from "../../../../redux/cart/cart-slice";
import { useToast } from "@chakra-ui/react";
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

  const baseURL = "http://localhost:4000/";
  const customerId = localStorage.getItem("userId");
  const { token } = useAppSelector((state) => state.auth);

  const sendItem = async (meal: Meal) => {
    const productId = meal._id;
    await axios
      .post(
        `${baseURL}users/${customerId}/cartItems`,
        { productId },
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast({
          title: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  const addItem = (meal: Meal) => {
    dispatch(addToCart(meal));
    sendItem(meal);
  };

  if (loading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  return (
    <section id="menu">
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
              className={item.available === 0 ? "item__out-of-stock" : ""}
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
