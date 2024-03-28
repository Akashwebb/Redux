import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { useSelector } from "react-redux";

const Head=()=>{
    const products= useSelector(state=> state.cartState.cartList)
    // console.log("product-----",products)

    return(
        <div id="flexing" style={{backgroundColor:"grey"}}>
            <div> <h2> Redux Example </h2></div>
            <div>
            <Link to="/"><button className="but"> Shopping </button></Link>
             <Link to="/cart"> <button className="but"> Cart </button></Link>   
            </div>
            <div>
                <h2>Cart : {products.length} </h2>

            </div>
               
        </div>
    )
}
export default Head