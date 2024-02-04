import React, { useEffect, useState } from "react";
import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import "./homepage.styles.scss";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import ShoppingCart from "./components/shopping-cart/shopping-cart";

const HomePage: React.FC = () => {
  const options = ["Dine in", "To go", "Delivery"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  return (
    <main className="main">
      <div>
        <Header />
        <Navbar />
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
