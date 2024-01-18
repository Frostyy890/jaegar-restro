import React, { useState } from "react";
import "./sidebar.styles.scss";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";
import LogOut from "../../assets/icons/Log Out.svg";
import sections from "./section.data";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/auth/auth-slice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<number | null>(1 || null);

  const Logout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <aside className="aside">
        <ul className="side-list">
          <li className="side-item logo" onClick={() => setActive(1)}>
            <Link to="/homepage">
              <img src={Logo} alt="" />
            </Link>
          </li>
          {sections.map((section) => (
            <li
              key={section.id}
              className={`side-item ${active === section.id ? "active" : ""}`}
              onClick={() => setActive(section.id)}
            >
              <Link to={section.link} className="side-link">
                <span className="icon">
                  <img src={section.imgUrl} alt="" />
                </span>
              </Link>
            </li>
          ))}
          <li className="side-item logo" onClick={Logout}>
            <Link className="side-link" to="/">
              <span className="icon">
                <img src={LogOut} alt="" />
              </span>
            </Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
};

export default Sidebar;
