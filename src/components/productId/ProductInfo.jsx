import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import './styles/productInfo.css'

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handleMinus = () => {
        if(counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleAddCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: product.id,
            quantity: counter
        }
        axios.post(URL, data, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

  return (
    <article className='product__info'>
        <h2 className='product__title'>{product?.title}</h2>
        <p className='product__info-description'>{product?.description}</p>
        <footer className='product__info__footer'>
            <div className='product__info__price__container'>
                <h3 className='product__info__price__label'>Price </h3>
                <span className='product__info__price__number'>$ {product?.price}</span>
            </div>
            <div className='product__info__quantity__container'>
                <h3 className='product__info__quantity-label'>Quantity</h3>
                <div className='counter'>
                    <div onClick={handleMinus} className='counter__minus'>-</div>
                    <div className='counter__number'>{counter}</div>
                    <div onClick={handlePlus} className='counter__plus'>+</div>
                </div>
            </div>
            <button onClick={handleAddCart} className='product__info__btn'>Add to cart <i className="product__info__icon fa-solid fa-cart-shopping"></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo