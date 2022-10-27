import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/logginScreen.css'

const LoginScreen = () => {

    const {handleSubmit, register, reset} = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        .then(res => {
            console.log(res.data)
            //setItem es para crear un nuevo elemento en el localStorage
            localStorage.setItem('token', res.data.data.token)
            setIsLogged(true)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if(isLogged) {
        return (
            <div className='user__logged__container'>
                <h2 className='user__text'> User Logged  <i className="fa-solid fa-user-check"></i></h2>
                <button onClick={handleLogout} className='user__out__btn'>Logout </button>
            </div>
        )
    }

  return (
    <div>
        <form className='form' onSubmit={handleSubmit(submit)}>
            <h2 className='form_title'>Welcome! Enter your email and password to continue.</h2>
            <div className='form-div'>
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-input' placeholder='Enter your email' type="email" id='email' {...register('email')} />
            </div>
            <div className='form-div'>
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-input' placeholder='Enter your password' type="password" id='password' {...register('password')} />
            </div>
            <button className='form__btn'>Login</button>

        </form>
    </div>
  )
}

export default LoginScreen