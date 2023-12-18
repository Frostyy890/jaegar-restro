import React from 'react';
import './sidebar.styles.css';
import Logo from '../../assets/icons/Restaurant.png'
import Home from '../../assets/icons/Home.png'
import Discount from '../../assets/icons/Discount.png'
import Dashboard from '../../assets/icons/Dashboard.png'
import Message from '../../assets/icons/Message.png'
import Notifications from '../../assets/icons/Notification.png'
import Settings from '../../assets/icons/Setting.png'
import LogOut from '../../assets/icons/Log Out.png'


const Sidebar = () => {
  return (
    <div>
      <aside className="aside">
        <nav className="nav">
            <ul className="side-list">

              {/* item 0 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={Logo} alt="" />
                </a>
              </li>
              {/* item 1 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={Home} alt="" />
                </a>
              </li>
              {/* item 2 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={Discount} alt="" />
                </a>
              </li>
              {/* item 3 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={Dashboard} alt="" />
                </a>
              </li>
              {/* item 4 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={Message} alt="" />
                </a>
              </li>
              {/* item 5 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={Notifications} alt="" />
                </a>
              </li>
              {/* item 6 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={Settings} alt="" />
                </a>
              </li>
              {/* item 7 */}
              <li className="side-item">
                <a href="" className="side-link">
                  <img src={LogOut} alt="" />
                </a>
              </li>

            </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar;
