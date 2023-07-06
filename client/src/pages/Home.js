import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const apiKey = "e9504ab12bda4519a04e845996b47b09";

const queryURL = "https://api.rawg.io/api/games" + "&appid=" + apiKey;

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

console.log(fetch(queryURL));

export default Home;
