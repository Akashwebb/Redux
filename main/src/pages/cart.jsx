import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import Head from "./head";

const Cart = () => {
  const products = useSelector(state => state.cartState);    //  getting all selected data from store useing   useSelector hook 
  console.log("product-----", products);                      // SAME AS IN main.jsx  ,  global values extraction from store

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(remove(item)); 
  };

  return (
    <>
      <Head />
       <h2> Items added to cart are here ---------------------------------- </h2>
      <h2> Total Price is : {products.total} </h2>

      <div>
        {products.cartList.map((item, index) => (
          <div key={index} className="grid-container">
            <article className="grid-item">
              <span>
                <h3>Name: {item.name}</h3>
                <p>Brand: {item.brand}</p>
              </span>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px" }}
              />
              <p>Price: {item.price}</p>
              {/* Pass the item to handleRemoveItem */}
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
