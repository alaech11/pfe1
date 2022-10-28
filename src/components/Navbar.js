
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button3} from './Button3.js'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
        setButton(false)}
        else {
            setButton(true)}
        }

        useEffect(() => {
            showButton()
        }, [])
      window.addEventListener('resize', showButton)

      
  return (
   <>
   
   <nav className='navbar'>
     <div className= 'navbar-container'>
       <Link to='/' className= 'navbar-logo' onClick={closeMobileMenu}>
        Fs Tétouan 
       </Link>
       <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
       </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    home
                </Link>
            </li>
            <li>
            <Link to='/projets' className='nav-links' onClick={closeMobileMenu}>
                    projets
                </Link>
            </li>


            <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    contact
                </Link>
            </li>
            
            <li className='nav-item'>
                <Link to='/consiel' className='nav-links-mobile' onClick={closeMobileMenu}>
                conseil pfe
                </Link>
            </li>
        </ul>
        {button && <Button3 buttonStyle='btn-outline' > conseil pfe</Button3>}

   </div>
  </nav>
   </>


  )
}

export default Navbar