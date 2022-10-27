import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        //El action.payload es elemento que permite recibir la informacion desde la aplicacion de forma dinamica
        setProductsGlobal: (state, action) => action.payload,
        ascendingProducts: (state) => { 
            state.sort((a, b) => +a.price - +b.price)
        },
        descendingProducts: (state) => { 
            state.sort((a, b) => +b.price - +a.price)
        }
    }
})

export const {setProductsGlobal, ascendingProducts, descendingProducts} = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
    //se utiliza el dispatch para despachar la accion y ocupar el set
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}

export const getProductsByCategory = id => (dispatch) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
    return axios.get(URL)
    //se utiliza el dispatch para despachar la accion y ocupar el set
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}