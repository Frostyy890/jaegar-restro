import React from 'react'
import './menu-item.styles.scss'
import { formatCurrency } from '../../utils/formatCurrency';

type MenuItemProps = {
  id: number,
  name: string,
  price: number,
  available: number
  imgUrl: string
}

const MenuItem = ({id, name, price, available, imgUrl}: MenuItemProps) => {
  return (
    <div className='card'>
        <img src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042" alt="" />
      <div className='card-details'>
        <span className='name'>{name}</span>
        <span className='price'>{formatCurrency(price)}</span>
        <span className='available'>{available} Bowls Available</span>
      </div>
    </div>





    // <div id='menu-grid'>
    //   {meals.map((meal) => (
    //     <div className='item' key={meal.id}>
    //       <div className='image-container'>
    //         <img src="https://static.toiimg.com/thumb/94078477.cms?width=400&height=300&resizemode=4&imgsize=96042" alt="some shit" />
    //       </div>
    //       <div className='item-details'>
    //         <span>{meal.name}</span>
    //         <span>{formatCurrency(meal.price)}</span>
    //         <span>{meal.available} Bowls available</span>
    //         </div>
    //     </div>
    //   ))}
    // </div>
  )
}

export default MenuItem;
