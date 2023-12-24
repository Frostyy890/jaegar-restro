import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/homepage/homepage';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>  
  );
}

export default App;
