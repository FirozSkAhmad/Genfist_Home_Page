import { configureStore } from "@reduxjs/toolkit";
import categorieSlice from "./categorieSlice";
import dealsofthedaySlice from "./dealsofthedaySlice";
import expiryproductsSlice from "./expiryproductsSlice";

const store = configureStore({
    reducer: {
        categorie: categorieSlice,
        dealsoftheday: dealsofthedaySlice,
        expiryproducts: expiryproductsSlice
    }
})

export default store