import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGOTIPO_mobile.svg';
import menuIcon from '../assets/menuMobile.svg';
import '../styles/stylesCabecalhoMobile.css';

export default function CabecalhoMobile() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        console.log("Botão clicado!");
        setMenuAberto(!menuAberto);
    };

    return (
        <div className='main-nav'>
            <div className="nav-inner">
                <img src={logo} className="logo-mobile" alt="logo" />

                <button className="menu-button" aria-label="Abrir menu" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Menu" />
                </button>
            </div>

            {menuAberto && (
                <nav className={`menu-mobile ${menuAberto ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/SobreNos" onClick={toggleMenu}>Sobre nós</Link></li>
                    <li><Link to="/Servicos" onClick={toggleMenu}>Serviços</Link></li>
                    <li><Link to="/Projetos" onClick={toggleMenu}>Projetos</Link></li>
                    <li><Link to="/Contatos" onClick={toggleMenu}>Contato</Link></li>
                </ul>
                </nav>
            )}
        </div>
    );
}
