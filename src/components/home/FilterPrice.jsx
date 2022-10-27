import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const from = +e.target.from.value
        const to = +e.target.to.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }
  return (
    <form onSubmit={handleSubmit} className='price__form'>
        <h3 className='price__title-filter'>Price</h3>
        <div className='price__form-filter'>
            <label className='price__label' htmlFor="">From:</label>
            <input className='price__input' type="number" id='from'/>
        </div>
        <div>
            <label className='price__label' htmlFor="">To:</label>
            <input className='price__input' type="number" id='to'/>
        </div>
        <button className='price__btn-filter'>Filter</button>
        
    </form>
  )
}

export default FilterPrice