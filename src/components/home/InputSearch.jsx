import React from 'react'
import './styles/inputsearch.css'

const InputSearch = ({setInputText, inputText}) => {

    const handleOnChange = e => {
        setInputText(e.target.value)
    }

  return (
    <div className='search__container'>
    <input className='search__input' value={inputText} onChange={handleOnChange} type="text" placeholder='Search a product &#128269;'/>
    </div>
  )
}

export default InputSearch