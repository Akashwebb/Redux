import {configureStore} from "@reduxjs/toolkit"
import { cartReducer } from "./cartSlice"        // importing  cartSlice.reducer

export const store=configureStore({              // creating store 
    reducer:{
        cartState:cartReducer,                    // contain cartList[] and total
    }
})


// cartState  ::
  
// (property) cartState: Reducer<{
//     cartList: never[];
//     total: number;
// }, UnknownAction, {
//     cartList: never[];
//     total: number;
// }>