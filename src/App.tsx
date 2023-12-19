import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';
import Navbar from './components/navbar/navbar';
import LowerBar from './components/lower-bar/lower-bar';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <LowerBar />
      <Sidebar />
      <Menu />
    </div>
  );
}

export default App;
