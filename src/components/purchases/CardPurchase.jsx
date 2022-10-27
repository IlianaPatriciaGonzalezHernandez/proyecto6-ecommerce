import React from 'react'
import './styles/cardpurchases.css'

const CardPurchase = ({purchase}) => {

  console.log(purchase)



    
  return (
    <article>
      {/* <header className='card_purchases-date'>{purchase.updatedAt}</header> */}
      <div>
        {
          purchase.cart.products.map(product => (
            <section className='card__product-container1' key={product.id}>
              <h3 className='card__product__title1'>{product.title}</h3>
              <div className='card__product_quantity1'>{product.productsInCart.quantity}</div>
              <div className='card__product_price1'>$ {product.price}</div>
              <div className='card_purchases-date'>{purchase.updatedAt}</div>
            </section>
          ))
        }

      </div>
    </article>
  )
}

export default CardPurchase