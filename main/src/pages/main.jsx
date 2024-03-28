import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./style.css";
import Head from "./head";

import {add,remove} from "../store/cartSlice"

import { useDispatch, useSelector } from "react-redux";

// useDispatch gives you access to a special function called dispatch that allows you to send actions to the Redux store without any hassle.
// useSelector allows you to select and access specific pieces of data from the Redux store state, and it automatically updates whenever the Redux store state changes.

// In summary,  #useDispatch helps you send actions to the Redux store, and  #useSelector helps you extract and use data from the Redux store state in your React components.
// They both make it easier to work with Redux in your React applications by providing convenient hooks for interacting with the Redux store.


const Main = () => {
    const [dd, setDd] = useState([]);
    const [cart, setCart] = useState([]); // State to track items in the cart

    const products = useSelector(state => state.cartState);     //  GETTING FROM STORE 
    console.log("product--MAIN ----------", products);          // products have all values which are being selected and push to cartList and cartList is added to store as public which is access by any component 

    const dispatch = useDispatch()

    useEffect(() => {
        setDd(data);
    }, []);

    // Function to handle adding item to cart
    const addToCart = (item) => {
        setCart([...cart, item]);
        dispatch(add(item))              // CALLING   function add()  FROM  cartSlice  USING  useDispatch() hook
    };

    const handleRemoveItem = (item) => {
        dispatch(remove(item));          // CALLING   function remove()  FROM  cartSlice  USING  useDispatch() hook
      };
    
    

    return (
        <>
           <Head/>
               <h2> Total items are here -----------------------------  </h2>
           <div className="grid-container">
  {dd.map((item, index) => (
    <article key={index} className="grid-item">
      <span>
        <h3>Name: {item.name}</h3>
        <p>Brand: {item.brand}</p>
      </span>
      <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
      <p>Price: {item.price}</p>

      {/* Render Add to Cart button if item is not in cart, otherwise render Remove button */}
      { products.cartList.some(cartItem => cartItem.id === item.id) ? (
        <button className="but2" onClick={() => handleRemoveItem(item)}>Remove</button>
      ) : (
        <button className="but" onClick={() => addToCart(item)}>Add to Cart</button>
      )}
    </article>
  ))}
</div>

        </>
    );
};

export default Main;
