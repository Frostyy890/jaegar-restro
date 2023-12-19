import React from 'react'
import './topbar.styles.css';

const Topbar = () => {
  const today = new Date()
  const date = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  })

  return (
    <div id='topbar'>
        <div className="top-container">
            <div className="name-date-col">
                <h2 className="name">Jaegar Restro</h2>
                <span className='date'>{date.format(today)}</span>
            </div>
            <div className="input-col">
                <input type="text" className='search-input' placeholder='Search for food, coffee, etc..' />
            </div>
        </div>
    </div>
  )
}

export default Topbar;
