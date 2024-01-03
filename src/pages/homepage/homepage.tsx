import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/menu";
import Header from "../../components/header/header";
import "./homepage.styles.scss";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchMeals } from "../../components/menu/meal-slice";

interface Category {
  id: number;
  category: string;
}

const HomePage: React.FC = () => {
  const baseUrl = "http://localhost:7000/";
  const [categories, setCategories] = useState<Category[]>([]); // State to store categories
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(
  //   "All"
  // );

  // const dispatch = useDispatch<AppDispatch>();
  // const { dishes, loading, error } = useSelector(
  //   (state: RootState) => state.meals
  // );

  // const [meals, setMeals] = useState(dishes);
  // const [filteredMeals, setFilteredMeals] = useState(dishes);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get<Category[]>(
          `${baseUrl}categories`
        );
        setCategories(categoriesResponse.data); // 'All' is a default category
        console.log(categoriesResponse.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch data using Axios and update state

    fetchCategories();
  }, []);

  // const handleFilter = (filterValue: string) => {
  //   setFilteredMeals(
  //     meals.filter((meal) =>
  //       meal.name.toLowerCase().includes(filterValue.toLowerCase())
  //     )
  //   );
  // };

  // const handleCategorySelect = (category: string) => {
  //   setSelectedCategory(category);
  //   if (category === "All") {
  //     setFilteredMeals(meals);
  //   } else {
  //     setFilteredMeals(
  //       meals.filter((meal) => meal.categories.includes(category))
  //     );
  //   }
  // };

  return (
    <main className="main">
      <div>
        <Header
        // onFilter={handleFilter}
        />
        <Navbar
          categories={["All", ...categories.map((cat) => cat.category)]}
          // onSelectCategory={handleCategorySelect}
        />
        <Menu />
      </div>
      <ShoppingCart />
    </main>
  );
};

export default HomePage;
