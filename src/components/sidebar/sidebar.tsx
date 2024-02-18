import React, { Suspense, useState } from "react";
import "./sidebar.styles.scss";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";
import LogOut from "../../assets/icons/Log Out.svg";
import sections from "./section.data";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { item, logout } from "../../redux/auth/auth-slice";
import axios from "axios";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const savedCartItems: any[] | undefined = [];
  for (const item of cartItems) {
    const cartItem = {
      productId: item.productId._id,
      quantity: item.quantity,
    };
    savedCartItems.push(cartItem);
  }
  const baseURL = "http://localhost:4000/";
  const customerId = localStorage.getItem("userId");
  const { token } = useAppSelector((state) => state.auth);
  const saveItems = async () => {
    axios
      .post(`${baseURL}users/${customerId}/cartItems`, savedCartItems, {
        headers: { authorization: token },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };
  const Logout = () => {
    if (
      localStorage.getItem("cartItems") ===
      localStorage.getItem("initialCartItems")
    ) {
      dispatch(logout());
    } else {
      if (
        window.confirm("Do you want to save changes in your cart?") === true
      ) {
        saveItems();
        dispatch(logout());
      } else {
        dispatch(logout());
      }
    }
  };
  return (
    <div>
      <aside className="aside">
        <ul className="side-list">
          <li className="side-item">
            <Link to="/homepage">
              <img src={Logo} alt="" />
            </Link>
          </li>
          {sections.map((section) => (
            <CustomLink to={section.link} key={section.id}>
              <span className="icon">
                <img src={section.imgUrl} alt="" />
              </span>
            </CustomLink>
          ))}
          <li className="side-item" onClick={Logout}>
            <Link className="side-link" to="/">
              <span className="icon">
                <img src={LogOut} alt="" />
              </span>
            </Link>
          </li>
        </ul>
      </aside>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

function CustomLink({ to, children, ...props }: any) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={`side-item ${isActive ? "active" : ""}`}>
      <Link to={to} className="side-link" {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
