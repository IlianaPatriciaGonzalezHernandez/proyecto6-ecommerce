import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slice/products.slice'
import './styles/orderbyprice.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const OrderByPrice = () => {

   const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingProducts())
    }

    const handleDescending = () => {
        dispatch(descendingProducts())
    }

    const [dropdown1, setDropdown1] = useState(false)

    const handleClose = () => {
      setDropdown1(!dropdown1)
  }

  return (

    <div>
      <div>
        <Dropdown isOpen={dropdown1} toggle={handleClose}>
          <DropdownToggle caret className='order__title'>
          Order by price
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
            <div className='order-list'>
        <li onClick={handleAscending} className='order__btn'>Price Low to High </li>
        <li onClick={handleDescending} className='order__btn'>Price High to Low</li>
    </div>

            </DropdownItem>
          </DropdownMenu>

        </Dropdown>
      </div>

    
    {/* <div className='order__container'>
        <h3 className='order__title'>Order by price</h3>
    <div className='order-list'>
        <button onClick={handleAscending} className='order__btn'>Price Low to High </button>
        <button onClick={handleDescending} className='order__btn'>Price High to Low</button>
    </div>
    </div> */}
    </div>
  )
}

export default OrderByPrice