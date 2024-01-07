import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/menu";
import Header from "../../components/header/header";
import "./homepage.styles.scss";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchMeals } from "../../redux/meals/meal-slice";

interface Category {
  id: number;
  category: string;
}

const HomePage: React.FC = () => {
  const baseUrl = "http://localhost:7000/";
  const [categories, setCategories] = useState<Category[]>([]); // State to store categories

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

  return (
    <main className="main">
      <div>
        <Header />
        <Navbar
          categories={["All", ...categories.map((cat) => cat.category)]}
        />
        <Menu />
      </div>
      <ShoppingCart />
    </main>
  );
};

export default HomePage;
