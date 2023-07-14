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
      <p>a</p>
    </div>
    </>
  );
};

// let gamesDiv = document.querySelector(".games");
// let gamePage
// // let gamePageUrl = /gameId
// console.log(gamesDiv);

// async function callApi() {
//   const json = await getApi();
//   console.log(json);
// }

// async function getApi() {
//   let requestUrl = "https://api.rawg.io/api/games?page_size=100&key=e9504ab12bda4519a04e845996b47b09";
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       async function divAppend() {
//         let gameDivAppend = await Home;
//         console.log(gameDivAppend);
//         // runAppend();
//       }
    //   async function runAppend() {
    //   for (let i=0; i < data.results.length; i++) {
    //     let gameBox = document.createElement("div");
    //     let gameLink = document.createElement("a");
    //     let gameTitle = document.createElement("h2");
    //     let gameImg = document.createElement("img");
    //     let releaseDate = document.createElement("p");
    //     let cartGame = document.createElement("button");
    //     let genresDiv = document.createElement("div");
    //     let gameId = gameBox.setAttribute("id", data.results[i].id);
    //     console.log(data.results[i].genres.length);
    //     //platforms
    //     //for (let j=0;j < data.results.platforms.length; j++)
    //     //genres
    //     for (let k=0;k < data.results[i].genres.length; k++) {
    //       let gameGenre = document.createElement("p");
    //       gameGenre.textContent = data.results[i].genres[k].name;
    //       genresDiv.appendChild(gameGenre);
    //     }
    //     gameTitle.textContent = data.results[i].name;
    //     //can dayjs this to reformat the date
    //     releaseDate.textContent = data.results[i].released;
    //     gameImg.setAttribute("src", data.results[i].background_image);
    //     cartGame.textContent = "Add to Cart";
    //     gameLink.setAttribute("href", "/game/" + data.results[i].id);
    //     console.log(gameTitle);
    //     gamesDiv.appendChild(gameBox);
    //     gameBox.appendChild(gameLink);
    //     gameLink.appendChild(gameTitle);
    //     gameLink.appendChild(gameImg);
    //     gameBox.appendChild(genresDiv);
    //     gameBox.appendChild(releaseDate);
    //     gameBox.appendChild(cartGame);
    //     gameBox.addEventListener("click", function() {
    //       gamePage = this.getAttribute("id");

    //     })
    //     console.log(gameBox);
//     //   };
//     // }
//     // divAppend();
//     })
// };

// callApi();
export default Home;

//two options, wrap in a tag, and then link using id(easiest option)
//#2, try and understand how pages are done using react(very difficult)

//other issue, how to dispaly details page with api info, have basically no clue.
//ned to be able to create page, put id in page link, and then pass id into page code to pull info from api

//2nd important issue, save game, 

//other issues, filter functions, search functions

//filter
//search bar
