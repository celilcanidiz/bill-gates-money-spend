import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productsSlice";

export const store = configureStore({
    reducer:{
        product:productReducer,
    }
})