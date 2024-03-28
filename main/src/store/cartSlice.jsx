
import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice(
    {
        name:"cart",
        initialState:{
            cartList:[],         // store all cart data here which are added to cart
            total:0              // total cost after adding
        },
        reducers:{

            add(state,action){                                              // function to add item detail , used in main.jsx
              console.log("action---",action.payload)                       // gives detail for one selected item

             const updatedCartList = [...state.cartList, action.payload];   // pushing multiple selected items in updatedCartList 
               const total = state.total + parseInt(action.payload.price)
               return {...state, total:total,cartList:updatedCartList}       // returning final value
            },



            remove(state,action){                                           // function to remove item
                console.log("removed--------",action.payload)
                const updatedCartList= state.cartList.filter(item => item.id !== action.payload.id)
                const total = state.total - parseInt(action.payload.price)
                return {...state, total:total,cartList:updatedCartList}
            }
        }
    }
);
// here if you want to add more data like comment taken from user ,
// pass variable name into  createSlice into initialState
//  just like cartList and total

export const {add,remove} = cartSlice.actions;
export const cartReducer  = cartSlice.reducer;