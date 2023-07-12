import React from 'react';
import './FilterSection.css';


function FilterSection() {
  return (
    <div className="filter-section">
      <h3>Filter by</h3>
      <div>
        <h4>Platform</h4>
        <label>
          <input type="checkbox" value="pc" /> PC
        </label>
        <label>
          <input type="checkbox" value="xbox" /> Xbox
        </label>
        <label>
          <input type="checkbox" value="ps5" /> PS5
        </label>
        <label>
          <input type="checkbox" value="ps4" /> PS4
        </label>
      </div>
      <div>
        <h4>Genre</h4>
        <label>
          <input type="checkbox" value="rpg" /> RPG
        </label>
        <label>
          <input type="checkbox" value="shooters" /> Shooters
        </label>
        <label>
          <input type="checkbox" value="strategy" /> Strategy
        </label>
        <label>
          <input type="checkbox" value="open-world" /> Open World
        </label>
        <label>
          <input type="checkbox" value="mmo" /> MMO
        </label>
      </div>
      <div>
        <h4>Year of Release</h4>
        <select>
          <option value="">All</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSection;
