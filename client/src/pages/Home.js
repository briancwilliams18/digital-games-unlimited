import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const apiKey = "e9504ab12bda4519a04e845996b47b09";

const Home = () => {
  return (
    <><div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
    <div className="games">
      <p>text</p>
      <p>add less</p>
    </div>
    </>
  );
};

let gamesDiv = document.querySelector(".games");
let gamePage
// let gamePageUrl = /gameId
console.log(gamesDiv);

async function callApi() {
  const json = await getApi();
  console.log(json);
}

async function getApi() {
  let requestUrl = "https://api.rawg.io/api/games?page_size=100&key=e9504ab12bda4519a04e845996b47b09";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      async function divAppend() {
        let gameDivAppend = await Home;
        console.log(gameDivAppend);
        runAppend();
      }
      async function runAppend() {
      for (let i=0; i < data.results.length; i++) {
        let gameBox = document.createElement("div");
        let gameTitle = document.createElement("h2");
        let gameImg = document.createElement("img");
        let releaseDate = document.createElement("p");
        let cartGame = document.createElement("button");
        let genresDiv = document.createElement("div");
        gameBox.setAttribute("id", data.results[i].id);
        console.log(data.results[i].genres.length);
        //platforms
        //for (let j=0;j < data.results.platforms.length; j++)
        //genres
        for (let k=0;k < data.results[i].genres.length; k++) {
          let gameGenre = document.createElement("p");
          gameGenre.textContent = data.results[i].genres[k].name;
          genresDiv.appendChild(gameGenre);
        }
        gameTitle.textContent = data.results[i].name;
        //can dayjs this to reformat the date
        releaseDate.textContent = data.results[i].released;
        gameImg.setAttribute("src", data.results[i].background_image);
        cartGame.textContent = "Add to Cart";
        console.log(gameTitle);
        gamesDiv.appendChild(gameBox);
        gameBox.appendChild(gameTitle);
        gameBox.appendChild(gameImg);
        gameBox.appendChild(genresDiv);
        gameBox.appendChild(releaseDate);
        gameBox.appendChild(cartGame);
        gameBox.addEventListener("click", function() {
          gamePage = this.getAttribute("id");

        })
        console.log(gameBox);
      };
    }
    divAppend();
    })
};

callApi();
export default Home;



//filter
//search bar
