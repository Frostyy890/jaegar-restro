import React, { useEffect, useState } from "react";
import "./sidebar.styles.scss";
import {
  Link,
  Outlet,
  useNavigate,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import Logo from "../../assets/logos/Logo.svg";
import LogOut from "../../assets/icons/Log Out.svg";
import sections from "./section.data";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/auth/auth-slice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [active, setActive] = useState<number>(() => {
  //   const storedActive = localStorage.getItem("active");
  //   return storedActive ? parseInt(storedActive, 10) : 1;
  // });

  // useEffect(() => {
  //   localStorage.setItem("active", active.toString());
  // }, [active]);
  // const chosenSection = sections.find((section) => section.id);
  // const resolvedPath = useResolvedPath(`${chosenSection?.link}`);
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const Logout = () => {
    dispatch(logout());
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
      <Outlet />
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
