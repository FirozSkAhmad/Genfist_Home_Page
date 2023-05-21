import { configureStore } from "@reduxjs/toolkit";
import categorieSlice from "./categorieSlice";
import dealsofthedaySlice from "./dealsofthedaySlice";
import expiryproductsSlice from "./expiryproductsSlice";
import bannerSlice from "./bannerSlice";

const store = configureStore({
    reducer: {
        categorie: categorieSlice,
        dealsoftheday: dealsofthedaySlice,
        expiryproducts: expiryproductsSlice,
        banners: bannerSlice
    }
})

export default store