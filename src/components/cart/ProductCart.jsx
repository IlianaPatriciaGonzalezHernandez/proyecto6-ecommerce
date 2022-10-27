import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slice/cart.slice'
import getConfing from '../../utils/getConfig'
import './styles/productCart.css'

const ProductCart = ({product}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfing())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCart())
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
    <section className='card__product-container'>
    <h2 className='card__product__title'>{product.title}</h2>
        {/* <div className='card__product__item'>Price</div> */}
        
        {/* <div className='card__product__item'>Quantity></div> */}
        <div className='card__product_quantity'>{product.productsInCart.quantity}</div>
        <div className='card__product_price'>$ {product.price}</div>
        <div className='card__btn'>
        <button onClick={handleDelete} className='cart-p__btn'><i className=' fa-regular fa-trash-can'></i></button>
        </div>
  </section>
</div>
  )
}

export default ProductCart