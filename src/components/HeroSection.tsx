import React, { useState, useEffect } from 'react';
import IconeFacebook from '../assets/facebook.svg';
import IconeInsta from '../assets/instagram.svg';
import IconeWhatsapp from '../assets/whats.svg';
import logo from '../assets/logo_sobre_nos.svg';
import logoMobile from '../assets/LOGOTIPO_mobile.svg';
import menuIcon from '../assets/menuMobile.svg';
import Saiba_Mais from '../components/buttonSaibaMais';
import '../styles/stylesCabecalho.css';
import '../styles/stylesCabecalhoMobile.css';
import '../styles/stylesHero.css';
import '../styles/stylesHeroMobile.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="hero-container">
      <div className="main-nav">
        {isMobile ? (
          <div className="nav-inner">
            <img src={logoMobile} className="logo-mobile" alt="logo" />
            <button className="menu-button" aria-label="Abrir menu">
              <img src={menuIcon} alt="Menu" />
            </button>
          </div>
        ) : (
          <nav className="navbar">
            <div className="container">
              <img src={logo} alt="logo" className="logo" id="main-logo" />
                <ul style={{ listStyle: 'none' }} className="menu-list">
                    <li className="menu-item"><Link to="/" className="menu_home" >HOME</Link></li>
                    <li className="menu-item"><Link to="/SobreNos"  className="menu-link"> SOBRE NÓS</Link></li> 
                    <li className="menu-item"><Link to="/Servicos" className="menu-link">SERVIÇOS</Link></li>
                    <li className="menu-item"><Link to="/Projetos"  className="menu-link">PROJETOS</Link></li>
                    <li className="menu-item"><Link to="/Contatos" className="menu-link">CONTATO</Link></li>
                </ul>
              <div className="icones-container">
                <a href="https://www.facebook.com/sua_pagina" target="_blank" rel="noopener noreferrer">
                  <img src={IconeFacebook} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/pegasusgirocopter/" target="_blank" rel="noopener noreferrer">
                  <img src={IconeInsta} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://wa.me/553592769912" target="_blank" rel="noopener noreferrer">
                  <img src={IconeWhatsapp} alt="WhatsApp" className="social-icon" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>

      <section className="apresentacao-container">
        <div className="apresentacao">
          <h1>
            <strong>Pegasus:</strong> Nossa missão é elevar você a novos horizontes
            com segurança e inovação
          </h1>
          <h5>
            Voando mais alto com tecnologia,<br />
            confiança e excelência.
          </h5>
          <Saiba_Mais titulo="SAIBA MAIS" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
