import React, { useEffect, useState } from "react";
import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import "./homepage.styles.scss";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import ShoppingCart from "./components/shopping-cart/shopping-cart";

interface Category {
  id: number;
  category: string;
}

const HomePage: React.FC = () => {
  const options = ["Dine in", "To go", "Delivery"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const baseUrl = "http://localhost:7000/";
  const [categories, setCategories] = useState<Category[]>([]); // State to store categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get<Category[]>(
          `${baseUrl}categories`
        );
        setCategories(categoriesResponse.data); // 'All' is a default category
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <main className="main">
      <div>
        <Header />
        <Navbar
          categories={["All", ...categories.map((cat) => cat.category)]}
        />
        <Menu
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <ShoppingCart
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </main>
  );
};

export default HomePage;
