import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import Cart from '../components/Cart';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail(props) {
  const location = useLocation();
  const propsData = location.state;
  // console.log(propsData);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  console.log(propsData);

  const [data2, setData] = useState(null);

  let aboutUrl = "https://api.rawg.io/api/games/" + id + "?key=e9504ab12bda4519a04e845996b47b09"
  console.log(aboutUrl);

  useEffect(() => {
    fetch(aboutUrl)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  console.log(data2);
  console.log(location);
  console.log(propsData);

  // useEffect(() => {
  //   fetch('https://api.rawg.io/api/games?page_size=100&key=e9504ab12bda4519a04e845996b47b09')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error));
  // }, []);

// const [pathName, setPathName] = useState(null) ;

// let gameId

// useEffect(() => {
//     let tmp = window.location.pathname.slice(window.location.pathname.lastIndexOf("/") , window.location.pathname.length) ;
//     // setPathName(tmp);
//     console.log(window.location.pathname);
//     console.log(tmp);
//     gameId = tmp.substring(1);
//     console.log(gameId);
// }, [])

  //learn how to fix
  // useEffect(() => {
  //   // already in global store
  //   // console.log(data2)
  //   // if (data2.results.length) {
  //   //   setCurrentProduct(data2.results.find((product) => product._id === gameId));
  //   // }
  //   // retrieved from server
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products,
  //     });

  //     data.products.forEach((product) => {
  //       idbPromise('products', 'put', product);
  //     });
  //   }
  //   // get cache from idb
  //   else if (!loading) {
  //     idbPromise('products', 'get').then((indexedProducts) => {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: indexedProducts,
  //       });
  //     });
  //   }
  // }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>

          <h2>{propsData.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={propsData.image}
            alt={currentProduct.name}
          />
              <div className="additional-details">
                <p>Release Date: {currentProduct.releaseDate || 'N/A'}</p>
                <p>Rating: {currentProduct.rating || 'N/A'}</p>
                <p>Platforms: {currentProduct.platforms || 'N/A'}</p>
              </div>
        </div>
      ) : null}
  
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
  
}

export default Detail;
