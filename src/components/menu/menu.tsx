import React, { useEffect, useState } from 'react'
import './menu.styles.css'
import MenuItem from '../menu-item/menu-item';

const Menu = () => {
    const [meals, setMeals] = useState([
      {id: 1, name: "ramen", price: "2$", available: "22"},
      {id: 2, name: "spicy ramen", price: "2$", available: "22"}
    ]);
    // useEffect(() => {
    //   fetch('http://localhost:8000/dishes')
    //   .then(res => {
    //     return res.json();
    //   }).then((data)=> {
    //     setMeals(data);
    //     console.log(data)
    //   })
    // }, [])
  return (
    <div>
      {/* <MenuItem meals={meals} title="All items!"/> */}
    </div>
  )
}

export default Menu;
