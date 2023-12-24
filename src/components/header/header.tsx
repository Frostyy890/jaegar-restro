import React, { useState, ChangeEvent } from 'react'
import './header.styles.scss'

interface headerProps {
    onFilter: (filterValue: string) => void;
}

const Header: React.FC<headerProps> = ({onFilter}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        onFilter(value); // Call the onFilter prop with the input text
        console.log(value);
      };
    
    const today = new Date()
    const date = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  })
  return (
    <header className='header container'>
            <div className="top-container container">
                <div className="name-date-col">
                    <h2 className="name">Jaegar Restro</h2>
                    <span className='date'>{date.format(today)}</span>
                </div>
                <div className="input-col">
                    <input 
                    type="text" 
                    className='search-input' 
                    placeholder='Search for food, coffee, etc..'
                    value={inputValue}
                    onChange={handleChange}
                    />
                </div>
            </div>
</header>
  )
}

export default Header;