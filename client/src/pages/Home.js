import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import FilterSection from "../components/Filter/FilterSection";
import SortBar from "../components/Sort/SortBar";

const Home = () => {
  return (
    <div className="container">
      <div className="filter-sort-container">
        <FilterSection />
        <SortBar />
      </div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
