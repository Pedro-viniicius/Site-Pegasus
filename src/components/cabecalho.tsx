import IconeFacebook from '../assets/Icone_Facebook.png';
import IconeInsta from '../assets/Icone_Insta.png'
import IconeWhatsapp from '../assets/Icone_Whatsapp.png'
import logo from '../assets/LOGOTIPO1 1.png'
import '../styles/stylesCabecalho.css'

export default function cabecalho() {
    return (
        <nav id="main-nav" className="navbar">
            <div className="container">

                <img src={logo} alt="logo" className="logo" id="main-logo" />
                <div className="menu-container">
                    <ul style={{ listStyle: 'none' }} className="menu-list">
                        <li className="menu-item"><a href="#" className="link-home">HOME</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">SOBRE NÓS</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">SERVIÇOS</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">PROJETOS</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">CONTATO</a></li>
                    </ul>
                </div>
                <div className="icones-container">
                    <a href="https://www.facebook.com/sua_pagina" target="_blank" rel="noopener noreferrer">
                        <img src={IconeFacebook} alt="Facebook" className="social-icon" id="facebook-icon" />
                    </a>

                    <a href="https://www.instagram.com/pegasusgirocopter/" target="_blank" rel="noopener noreferrer">
                        <img src={IconeInsta} alt="Instagram" className="social-icon" id="instagram-icon" />
                    </a>

                    <a href="https://wa.me/553592769912" target="_blank" rel="noopener noreferrer">
                        <img src={IconeWhatsapp} alt="WhatsApp" className="social-icon" id="whatsapp-icon" />
                    </a>
                </div>
            </div>
        </nav>
    );
}