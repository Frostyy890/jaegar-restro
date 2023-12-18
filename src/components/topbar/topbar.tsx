import React from 'react'
import './topbar.styles.css';

const Topbar = () => {
  return (
    <div id='topbar'>
        <div className="top-container">
            <div className="name-date-col">
                <h2 className="name">Jaegar Restro</h2>
                <span className='date'>Tuesday, 2 Feb 2021</span>
            </div>
            <div className="input-col">
                <input type="text" className='search-input' placeholder='Search for food, coffee, etc..' />
            </div>
        </div>
    </div>
  )
}

export default Topbar;
