
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {

  const [isMobile, setIsMobile] = useState(false)



//     const container = document.querySelector('.navbar__container')
// const menu = document.getElementById('menu')
// console.log(container)

//   container.addEventListener('click', function (e) {
    
//     if(e.target.matches('.menu--open')) {
//         menu.classList.add('show--menu')
//     }

//     if(e.target.matches('.menu--close')) {
//         menu.classList.remove('show--menu')
//     }

//     if (e.target.matches('menu__link')) {
//       menu.classList.remove('show--menu')
//     }
//   })



  return (
<div>
  <nav className='navbar'>
    <h3 className='logo'>e-commerce</h3>
    <ul className={isMobile? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
    <NavLink to='/login' className='login'>
      <li>Login</li>
    </NavLink>
    <NavLink to='/purchases' className='purchases'>
      <li>My Purchases</li>
    </NavLink>
    <NavLink to='/cart' className='cart'>
      <li>My Cart</li>
    </NavLink>
    </ul>
    <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
      {isMobile ? (
        <i className='fas fa-times'></i>
      ) : (
        <i className='fas fa-bars'></i>
      )}
    </button>
  </nav>


{/* <div className="navbar__container">
  <div id="menu" className="menu">
  <i  className="menu__icon menu--close fa-solid fa-circle-xmark"></i>
    <nav className="menu__list">
      <div className="menu__link">
        <NavLink to='/login' className='header__link'>
        <i className="nav-icon fa-solid fa-user"><span> Loggin</span></i>
        </NavLink></div>
      <div className="menu__link">
        <NavLink to='/purchases' className='header__link'>
        <i className="nav-icon fa-solid fa-bag-shopping"><span> Purchases</span></i>
                    </NavLink></div>
      <div className="menu__link">
        <NavLink to='/cart' className='header__link'>
           <i className="nav-icon fa-solid fa-cart-shopping"><span> Cart</span></i>
         </NavLink></div>
    </nav>
  </div>
  <i  className="menu__icon menu--open fa-solid fa-bars"></i>
</div> */}
<div className="nav__header">
<h3 className='header__title'>
<Link to='/'>Home</Link> </h3>
</div>
</div>
  )
}

export default Header