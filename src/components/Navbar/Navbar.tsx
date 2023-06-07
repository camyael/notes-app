import logo from "../../assets/logo/Logo_color.svg"

const Navbar = () => {
    return (
        <header id="navbar">
            <div className="navbar-logo">
                <img src={logo} alt=""/>
            </div>
            <nav className="navbar-menu">
                <a href="#">Servicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
                <a href="#">Sumate</a>
            </nav>
        </header>
    )
}

export default Navbar;