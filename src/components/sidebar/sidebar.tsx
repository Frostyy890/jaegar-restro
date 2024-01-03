import React from "react";
import "./sidebar.styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";

import sections from "./section.data";
const Sidebar = () => {
  return (
    <div>
      <aside className="aside">
        <nav className="nav">
          <ul className="side-list">
            <li className="side-item logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </li>
            {sections.map((section) => (
              <li key={section.id} className="side-item">
                <Link to={section.link} className="side-link">
                  <img src={section.imgUrl} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
