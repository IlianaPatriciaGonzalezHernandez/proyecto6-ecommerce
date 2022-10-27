import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slice/products.slice'
import './styles/category.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const FilterCategories = () => {
    
    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleFetchCategory = id => {
        if(id){
            dispatch(getProductsByCategory(id))
        } else {
            dispatch(getAllProducts())
        }
    }

    const [dropdown, setDropdown] = useState(false)

    const handleCloseDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div>
        <div>
            <Dropdown isOpen={dropdown} toggle={handleCloseDropdown} >
                <DropdownToggle caret className='category-title'>
                Category
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                    <li className='category-items' onClick={() => handleFetchCategory()}>All products</li>
            {
             categories?.map(category => (
                <li className='category-items2' key={category.id} onClick={() => handleFetchCategory(category.id)}>{category.name}</li>
             ))
            }

                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    {/* <article className='category-container'>

        <h2 className='category-title'>Category</h2>
        <ul className='category-list'>
            <li className='category-items' onClick={() => handleFetchCategory()}>All products</li>
            {
             categories?.map(category => (
                <li className='category-items2' key={category.id} onClick={() => handleFetchCategory(category.id)}>{category.name}</li>
             ))
            }
        </ul>
    </article> */}
    </div>
  )
}

export default FilterCategories