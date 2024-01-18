import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/menu";
import Header from "../../components/header/header";
import "./homepage.styles.scss";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";

interface Category {
  id: number;
  category: string;
}

const HomePage: React.FC = () => {
  const baseUrl = "http://localhost:7000/";
  const [categories, setCategories] = useState<Category[]>([]); // State to store categories
  const [username, setUsername] = useState("");
  const { success, message } = useAppSelector((state) => state.auth);
  const toast = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get<Category[]>(
          `${baseUrl}categories`
        );
        setCategories(categoriesResponse.data); // 'All' is a default category
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    };
    // Fetch data using Axios and update state
    fetchCategories();
  }, []);

  // useEffect(() => {
  //   if (success) {
  //     toast({
  //       title: `${message}`,
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true,
  //       position: "top-right",
  //     });
  //     navigate("/homepage");
  //   } else if (message) {
  //     toast({
  //       title: `${message}`,
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //       position: "top-right",
  //     });
  //   }
  // }, [success]);

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     const { data } = await axios.post(
  //       "http://localhost:4000",
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { status, user, token } = data;
  //     setCookie("token", token);
  //     if (!cookies.token) {
  //       navigate("/login");
  //     } else {
  //       navigate("/homepage");
  //     }
  //     setUsername(user);
  //     return status
  //       ? toast({
  //           title: `Welcome back ${user}`,
  //           status: "success",
  //           duration: 4000,
  //           isClosable: true,
  //           position: "top",
  //         })
  //       : (removeCookie("token"), navigate("/login"));
  //   };
  //   verifyCookie();
  //   console.log(cookies.token);
  // }, [cookies, navigate, removeCookie]);

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
