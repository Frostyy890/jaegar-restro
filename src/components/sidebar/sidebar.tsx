import React from 'react';
import './sidebar.styles.scss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logos/Logo.svg'
import Home from '../../assets/icons/Home.svg'
import Discount from '../../assets/icons/Discount.svg'
import Dashboard from '../../assets/icons/Dashboard.svg'
import Message from '../../assets/icons/Message.svg'
import Notifications from '../../assets/icons/Notification.svg'
import Settings from '../../assets/icons/Setting.svg'
import LogOut from '../../assets/icons/Log Out.svg'



const Sidebar = () => {
  return (
    <div>
      <aside className="aside">
        <nav className="nav">
            <ul className="side-list">

              {/* item 0 */}
              <li className="side-item">
                <Link to="/" className="side-link">
                  <img src={Logo} alt="" />
                </Link>
              </li>
              {/* item 1 */}
              <li className="side-item">
                <Link to="/" className="side-link">
                  <img src={Home} alt="" />
                </Link>
              </li>
              {/* item 2 */}
              <li className="side-item">
                <Link to="/discounts" className="side-link">
                  <img src={Discount} alt="" />
                </Link>
              </li>
              {/* item 3 */}
              <li className="side-item">
                <Link to="/dashboard" className="side-link">
                  <img src={Dashboard} alt="" />
                </Link>
              </li>
              {/* item 4 */}
              <li className="side-item">
                <Link to="/contacts" className="side-link">
                  <img src={Message} alt="" />
                </Link>
              </li>
              {/* item 5 */}
              <li className="side-item">
                <Link to="/notifications" className="side-link">
                  <img src={Notifications} alt="" />
                </Link>
              </li>
              {/* item 6 */}
              <li className="side-item">
                <Link to="/settings" className="side-link">
                  <img src={Settings} alt="" />
                </Link>
              </li>
              {/* item 7 */}
              <li className="side-item">
                <Link to="/logout" className="side-link">
                  <img src={LogOut} alt="" />
                </Link>
              </li>

            </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar;
