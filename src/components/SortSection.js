import React, { useState } from 'react';
import './SortSection.css'; // Assuming you're using a CSS file

// Sample recipe data
const recipes = [
  { id: 1, name: 'Yogurt Parfait', time: 15, imageUrl: require('../image/yogurt.jpg') },
  { id: 2, name: 'Chicken Chili', time: 70, imageUrl: require('../image/chicken.jpg') },
  { id: 3, name: 'yogurt', time: 15, imageUrl: require('../image/yogurt.jpg') },
  { id: 4, name: 'Rice Stir-Fry', time: 65, imageUrl: require('../image/fried-rice.jpg') },
  { id: 5, name: 'Lasagna', time: 70, imageUrl: require('../image/lasagna.jpg') },
  { id: 6, name: 'Tacos', time: 45, imageUrl: require('../image/taco.jpg') },
  { id: 7, name: 'Shawarma', time: 45, imageUrl: require('../image/shawarma.jpg') },
  { id: 8, name: 'Turkey Tacos', time: 45, imageUrl: require('../image/cupcake.jpg') },
];

// RecipeCard component
const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.imageUrl} alt={recipe.name} />
    <div className="time-badge">{recipe.time} min</div>
    <h3>{recipe.name}</h3>
  </div>
);

const RecipeApp = () => {
  const [sortOrder, setSortOrder] = useState('Z-A'); // Default sort order is Z-A

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortOrder === 'A-Z') {
      return a.name.localeCompare(b.name); // Ascending alphabetical order
    } else {
      return b.name.localeCompare(a.name); // Descending alphabetical order
    }
  });

  return (
    <div className="recipe-app">
      <div className="sort-by-section">
        <label htmlFor="sortBy">Sort By:</label>
        <select id="sortBy" value={sortOrder} onChange={handleSortChange}>
          <option value="Z-A">Z - A</option>
          <option value="A-Z">A - Z</option>
        </select>
      </div>

      <h2 className="recipe-title">Recipes</h2>

      <div className="recipes-list">
        {sortedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeApp;
