import logo from '../assets/LOGOTIPOVctor.svg'
import menuIcon from '../assets/menuMobile.svg'
import '../styles/stylesCabecalhoMobile.css'

export default function cabecalhoMobile() {
    return (
        <div className='main-nav'>
            <div className="nav-inner">

            <img src={logo} className="logo-mobile" alt="logo" />

                    <button className="menu-button" aria-label="Abrir menu">
                        <img src={menuIcon} alt="Menu" />
                    </button>

            </div>
        </div>
    );
}