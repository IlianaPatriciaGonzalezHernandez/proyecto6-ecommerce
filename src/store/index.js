import { configureStore } from "@reduxjs/toolkit";
import products from './slice/products.slice'
import cart from './slice/cart.slice'

export default configureStore({
    reducer: {
        products,
        cart

    }
})