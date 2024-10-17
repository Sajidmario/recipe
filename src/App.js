import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Recipies from './components/Recipies';
import Recipe_dropdown from './components/recipeDropdown';
import Sort_section from './components/SortSection';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Slider />

      <Recipies />

      <Recipe_dropdown />

      <Sort_section />
    </div>

    

  );
}

export default App;
