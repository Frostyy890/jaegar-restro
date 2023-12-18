import React from 'react'
import './navbar.styles.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className="container">
        <ul className="nav-list">
            <li className="nav-item">
                <a href="" className="nav-link">Hot Dishes</a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">Cold Dishes</a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">Soup</a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">Grill</a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">Appetizer</a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">Dessert</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
