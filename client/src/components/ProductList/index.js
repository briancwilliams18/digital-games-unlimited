import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const [data2, setData] = useState(null);

  // const [data3, setData3] = useState(null);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?page_size=100&key=e9504ab12bda4519a04e845996b47b09')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

    // let aboutUrl = "https://api.rawg.io/api/games/" + id + "?key=e9504ab12bda4519a04e845996b47b09"
    // console.log(aboutUrl);

    // useEffect(() => {
    //   fetch(aboutUrl)
    //     .then(response => response.json())
    //     .then(json => setData3(json))
    //     .catch(error => console.error(error));
    // }, []);
  

  // function getApi() {
  //   let requestUrl = "https://api.rawg.io/api/games?page_size=100&key=e9504ab12bda4519a04e845996b47b09";
  //   fetch(requestUrl)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data2) {
  //       console.log(data2);
  //       return data2;
  //     })
  //   }
    // getApi();
    // console.log(data2);
    // let apiInfo = getApi();
    // console.log(apiInfo);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);
  

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {console.log(data2)}
      {data2 ? (
        <div className="flex-row">
          {data2.results.map((product) => (
            <ProductItem
              key={product.id}
              _id={product.id}
              image={product.background_image}
              name={product.name}
              price={product.rating}
              quantity={product.genres[0].name}
            />
          ))}
        </div>
      ) : (
        <h3>Video Game are loading</h3>
      )}
      {/* {data3 ? (
        <div className="flex-row">
          {data3.map((product2) => (
            <ProductItem 
              description={product2}
            />
          ))}
        </div>
      ) : (
      <h3>loading</h3>
      )} */}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}



export default ProductList;
