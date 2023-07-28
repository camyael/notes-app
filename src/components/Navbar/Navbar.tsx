import logo from "../../assets/logo/Logo_color.svg"
import BurgerButton from "./BurgerButton";
import { useState } from 'react';

const Navbar = () => {
    const [ menu, setMenu ] = useState<boolean>(false)
    const [ scroll, setScroll ] = useState<boolean>(false)

    const handleOnClick = () => {
        setMenu(!menu)
    }

    const navbarScroll = () => {
        if(window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', navbarScroll)

    return (
        <header id="navbar" className={scroll ? 'active' : ''}>
            <div className="navbar-logo">
                <a href="/"><img src={logo} alt="logo"/></a>
            </div>
            <div>
            <button className="navbar-button" onClick={handleOnClick}><BurgerButton/></button>
            <nav className={`navbar-menu ${menu ? 'isActive' : ''}`}>
                <a href="#">Servicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
                <a href="#">Sumate</a>
            </nav>
            </div>
        </header>
    )
}

export default Navbar;