import React from 'react';
import './navbar.styles.scss';

interface NavbarProps {
    categories: string[],
    onSelectCategory: (category: string) => void;
}


const Navbar: React.FC<NavbarProps> = ({categories, onSelectCategory}) => {
    const handleClick = (category: string) => {
        onSelectCategory(category);
    }
  return (
    <nav id='navbar'>
        <div className='nav-container container'>
            <ul className='nav-list'>
                {categories.map((category, index)=> (
                    <li className='nav-item' key={index} onClick={() => handleClick(category)}>
                        {category}
                    </li>
                ) )}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;