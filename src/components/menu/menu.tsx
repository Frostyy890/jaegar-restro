import React, { useEffect, useState } from 'react'
import './menu.styles.scss'
import axios from 'axios';
import MenuItem from '../menu-item/menu-item';
import { error } from 'console';

interface mealItem {
  id: number,
  name: string,
  price: number,
  available: number,
  imgUrl: string,
  categories: string[]
}

interface DisplayDataProps {
  data: mealItem[];
}


const Menu: React.FC<DisplayDataProps> = ({data}) => {
    



  return (
    <section id='menu' className='container section'>
      <div className='options-container'>
        <h3>Choose Dishes</h3>
        <select name="" id="options">
          <option>Dine in</option>
          <option>To go</option>
          <option>Delivery</option>
        </select>
      </div>
      <div id='menu-grid'>
        {data.map(item => (
          <div className='menu-item' key={item.id}>
            <MenuItem {...item}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu;
