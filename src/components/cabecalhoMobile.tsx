import logo from '../assets/LOGOTIPO1 1.png'
import '../styles/stylesCabecalho.css'
import menuIcon from '../assets/menu-icon.png'
import '../styles/stylesCabecalhoMobile.css'

export default function cabecalhoMobile() {
    return (
        <nav id="main-nav" className="navbar">
            <div className="container">

                <img src={logo} alt="logo" className="logo" id="main-logo" />
                <button className="menu-button" aria-label="Abrir menu">
                    <img src={menuIcon} alt="Menu"  />
                </button>
            </div>
        </nav>
    );
}