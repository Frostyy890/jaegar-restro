import React, { useEffect, useState } from 'react'
import Menu from '../../components/menu/menu'
import Header from '../../components/header/header'
import './homepage.styles.scss'
import axios from 'axios'
import Navbar from '../../components/navbar/navbar'


interface Category {
  id: number,
  category: string
}


interface DataItem {
  id: number,
  name: string,
  price: number,
  available: number,
  imgUrl: string,
  categories: string[]
}

const HomePage: React.FC = () => {
  const baseUrl = 'http://localhost:7000/';
  const [meals, setMeals] = useState<DataItem[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<DataItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]); // State to store categories
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get<Category[]>(`${baseUrl}categories`);
        setCategories(categoriesResponse.data); // 'All' is a default category
        console.log(categoriesResponse.data)
      } catch (error) {
        // Handle error 
        console.error('Error fetching categories:', error);
      }
    };


    // Fetch data using Axios and update state
    const fetchData = async () => {
      try {
        const response = await axios.get<DataItem[]>(`${baseUrl}dishes`);
        setMeals(response.data);
        setFilteredMeals(response.data); // Initialize filteredData with fetched data
        console.log(response.data)


      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    };
    fetchCategories();
    fetchData();
  }, []);

  const handleFilter = (filterValue: string) => {
    setFilteredMeals(
      meals.filter((meal) => 
      meal.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    )
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredMeals(meals)
    } else {
      setFilteredMeals(meals.filter((meal) => 
        meal.categories.includes(category)
      ));

    }
  }

  return (
    <main className='main'>
        <div className='header'>
          <Header onFilter={handleFilter} />
          <Navbar categories={['All', ...categories.map(cat => cat.category)]} onSelectCategory={handleCategorySelect}/>
        </div>
        <Menu data={filteredMeals} />
    </main>
  )
}

export default HomePage