import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import getConfig from "../../utils/getConfig"



const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCardGlobal: (state, action) => action.payload
    }
})
export const {setCardGlobal} = cartSlice.actions
export default cartSlice.reducer

export const getAllProductCart = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    return axios.get(URL, getConfig())
    .then(res => dispatch(setCardGlobal(res.data.data.cart)))
    .catch(err => console.log(err))
}