
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
        FS-Tétouan   <i className="fa-solid fa-dove"></i>
       </Link>
       <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
       </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Accueil
                </Link>
            </li>
            <li>
            <Link to='/projets' className='nav-links' onClick={closeMobileMenu}>
                    Projets
                </Link>
            </li>


          <li className='nav-item'>
                <Link to='/Presentation' className='nav-links' onClick={closeMobileMenu}>
                Présentation
                </Link>
            </li>
            
            <li className='nav-item'>
                <Link to='/conseil' className='nav-links-mobile' onClick={closeMobileMenu}>
                Conseil PFE
                </Link>
            </li>
        </ul>
        {button && <Button3 buttonStyle='btn-outline' > Conseil PFE</Button3>}

   </div>
  </nav>
   </>


  )
}

export default Navbar