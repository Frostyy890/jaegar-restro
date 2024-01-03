import Home from "../../assets/icons/Home.svg";
import Discount from "../../assets/icons/Discount.svg";
import Dashboard from "../../assets/icons/Dashboard.svg";
import Message from "../../assets/icons/Message.svg";
import Notifications from "../../assets/icons/Notification.svg";
import Settings from "../../assets/icons/Setting.svg";
import LogOut from "../../assets/icons/Log Out.svg";

const sections = [
  {
    id: 1,
    link: "/",
    imgUrl: Home,
  },
  {
    id: 2,
    link: "/discounts",
    imgUrl: Discount,
  },
  {
    id: 3,
    link: "/dashboard",
    imgUrl: Dashboard,
  },
  {
    id: 4,
    link: "/contacts",
    imgUrl: Message,
  },
  {
    id: 5,
    link: "/notifications",
    imgUrl: Notifications,
  },
  {
    id: 6,
    link: "/settings",
    imgUrl: Settings,
  },
  {
    id: 7,
    link: "/logout",
    imgUrl: LogOut,
  },
];

export default sections;
