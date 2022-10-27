import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCart from "../components/cart/ProductCart"
import {getAllProductCart, setCardGlobal} from '../store/slice/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'

const Cart = () => {

  const [total, setTotal] = useState(0)

 const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    //Siempre se tiene que ejecutar la action ()
    dispatch(getAllProductCart())
  }, [])

  useEffect(() => {
     if(cart) {
      const result = cart.products.reduce((acc, cv) => {return acc + Number(cv.price) * cv.productsInCart.quantity}, 0)
    setTotal(result)
  }
  }, [cart])
 

  const handlePurchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references"
    }
     axios.post(URL, data, getConfig())
    .then(res => {
      console.log(res.data)
      dispatch(setCardGlobal(null))
      setTotal(0)
    })
    .catch(err => console.log(err))    
  }

  // console.log(cart)

  return (
    
      <div className='cart'>
       {/* <Link to='/'>Home</Link> */}
      <div className='cart__container'>
        {
          cart?.products.map(product => (
            <ProductCart
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
      <h2 className="total">Total: ${total}</h2>
      <button className='purchase--btn' onClick={handlePurchase}>Buy Now!</button>
    </div>
  )
}

export default Cart