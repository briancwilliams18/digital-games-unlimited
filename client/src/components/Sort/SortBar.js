import React from 'react';
import './SortBar.css';


function SortBar() {
  return (
    <div className="sort-bar">
      <h3>Sort by</h3>
      <select>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}

export default SortBar;
