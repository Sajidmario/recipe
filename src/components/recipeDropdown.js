import React, { useState } from 'react';
import './recipeDropdown.css'

const FilterDropdown = () => {
  const [mealDropdownOpen, setMealDropdownOpen] = useState(true);
  const [dietDropdownOpen, setDietDropdownOpen] = useState(true);
  const [recipeDropdownOpen, setRecipeDropdownOpen] = useState(true);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(true);

  const toggleDropdown = (setter) => {
    setter(prevState => !prevState);
  };

  return (
    <div className="filter-container">
      <table>
        <thead>
          <tr>
            <th>
              <button className="dropdown-title" onClick={() => toggleDropdown(setMealDropdownOpen)}>
                Meal <span>▾</span>
              </button>
            </th>
            <th>
              <button className="dropdown-title" onClick={() => toggleDropdown(setDietDropdownOpen)}>
                Special Diet <span>▾</span>
              </button>
            </th>
            <th>
              <button className="dropdown-title" onClick={() => toggleDropdown(setRecipeDropdownOpen)}>
                Recipe Type <span>▾</span>
              </button>
            </th>
            <th>
              <button className="dropdown-title" onClick={() => toggleDropdown(setTimeDropdownOpen)}>
                Time <span>▾</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {mealDropdownOpen && (
                <div className="dropdown-content">
                  <label><input type="checkbox" /> Breakfast</label>
                  <label><input type="checkbox" /> Lunch</label>
                  <label><input type="checkbox" /> Dinner</label>
                  <label><input type="checkbox" /> Snack/Brunch</label>
                  <label><input type="checkbox" /> Dessert</label>
                </div>
              )}
            </td>
            <td>
              {dietDropdownOpen && (
                <div className="dropdown-content">
                  <label><input type="checkbox" /> Vegetarian</label>
                  <label><input type="checkbox" /> Egg-free</label>
                  <label><input type="checkbox" /> Soy-free</label>
                  <label><input type="checkbox" /> Nut-free</label>
                  <label><input type="checkbox" /> Diabetes-friendly</label>
                  <label><input type="checkbox" /> Dairy-free</label>
                  <label><input type="checkbox" /> Gluten-free</label>
                </div>
              )}
            </td>
            <td>
              {recipeDropdownOpen && (
                <div className="dropdown-content">
                  <label><input type="checkbox" /> Kid-friendly</label>
                  <label><input type="checkbox" /> Crowd-friendly</label>
                  <label><input type="checkbox" /> CACFP Approved</label>
                  <label><input type="checkbox" /> No Cook</label>
                  <label><input type="checkbox" /> Freezer-friendly</label>
                </div>
              )}
            </td>
            <td>
              {timeDropdownOpen && (
                <div className="dropdown-content">
                  <label><input type="checkbox" /> 45-Minute Meals</label>
                  <label><input type="checkbox" /> 15-Minutes or less Meals</label>
                  <label><input type="checkbox" /> 30-Minute Meals</label>
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/* <style jsx>{`
        .filter-container {
          margin: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #e0e0e0;
          padding: 10px;
          text-align: left;
          background-color: #e8f6f8;
        }

        .dropdown-title {
          background-color: #f0f8f8;
          border: none;
          font-size: 16px;
          font-weight: bold;
          color: #4caf50;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          width: 100%;
        }

        .dropdown-content {
          background-color: white;
          padding: 10px;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        }

        .dropdown-content label {
          display: block;
          margin-bottom: 5px;
          font-size: 17px;
          color: #515050;
          letter-spacing: 2.3px;
          font-family: Radiate Sans Regular;
        }

        .dropdown-content input[type="checkbox"] {
          width: 23px;
          height: 23px;
          margin: 10px;
        }

        th, td {
          width: 25%;
          vertical-align: top;
        }
      `}</style> */}
    </div>
  );
};

export default FilterDropdown;
