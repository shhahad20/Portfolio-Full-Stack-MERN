import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


import "../styles/navbar.scss";

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    // const navigate = useNavigate()
    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 768)
        }
    
        handleResize()
        window.addEventListener('resize', handleResize)
    
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }, [])
    
      const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
      }
  return (
    <div id='navbar'>
      <ul id='navbar_container'>
        <div id='logo'>
          <Link to="/">
            <img src='/logo.svg' alt='logo' id='logo_image'/>
          </Link>
        </div>
        {!isMobile && (
            <div id='navbar_elements'>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Experience</Link>
            </li>
            <li>
                <Link to="/">Portfolio</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
            </div>
        )}
        {isMobile && (
            <li onClick={handleMobileMenuToggle} id='mobile_menu_toggle'>
            {isMobileMenuOpen ? 'x' : '='}
            </li>
          )}
        {isMobile && isMobileMenuOpen&& (
            <div id='mobile_menu'>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Experience</Link>
            </li>
            <li>
                <Link to="/">Portfolio</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
            </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
