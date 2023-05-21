import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Scrollerbox from "./components/Scrollerbox";
import Categorie from "./components/Categorie";
import DealsoftheDay from "./components/DealsoftheDay";
import { Provider, useDispatch } from 'react-redux'
import store from "../utils/store";
import { addCategorieItems } from "../utils/categorieSlice";
import { adddealsofthedayItems } from "../utils/dealsofthedaySlice";
import ExpiryProducts from "./components/ExpiryProducts";
import { addexpiryproductsItems } from "../utils/expiryproductsSlice";
import { addBannerSliceItems } from "../utils/bannerSlice";
import Footer from "./components/Footer";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data = await fetch('https://api.genifast.in/api/users/webhomepage/1')
        const json = await data.json()
        dispatch(addCategorieItems(json.categories))
        dispatch(adddealsofthedayItems(json.DealsoftheDay))
        dispatch(adddealsofthedayItems(json.DealsoftheDay))
        dispatch(addexpiryproductsItems(json.ExpiryProducts))
        dispatch(addBannerSliceItems(json.banners))
    }

    return (
        <>
            <Header />
            <Scrollerbox />
            <Categorie />
            <DealsoftheDay />
            <ExpiryProducts />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Provider store={store}><App /></Provider>)

