import HeroSection from "../components/HeroSection";
import projetosImgDesktop from "../assets/Component_projetos.svg";
import projetosImgMobile from "../assets/Component_projetos_mobile.svg";
import { useState, useEffect } from "react";
import "../styles/stylesProjetos.css";
import gradeprojetos from "../assets/gradeprojetos.svg";
import gradeprojetosMobile from "../assets/gradeprojetos_mobile.svg";
import logo from '../assets/LOGOTIPO_roda_pe.svg';
import email from '../assets/wpf_message.svg';
import local from '../assets/mdi_location.svg';
import tel from '../assets/bi_telephone-fill.svg';
import whats from '../assets/whats.svg';
import face from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import { Link } from "react-router-dom";
import Pater from '../assets/PATTERNTop.svg'

export default function Projetos(){
  const [imgSrc, setImgSrc] = useState(projetosImgDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setImgSrc(projetosImgMobile);
      } else {
        setImgSrc(projetosImgDesktop);
      }
    };

    handleResize(); // chamar uma vez ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [imgSrcc, setImgSrcc] = useState(gradeprojetos);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setImgSrcc(gradeprojetosMobile);
      } else {
        setImgSrcc(gradeprojetos);
      }
    };

    handleResize(); // chamar uma vez ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return(
        <div className="Projetos">
            <HeroSection />
            <div className="conteudo-principal_projetoss">
                <section className="projetos-section-um">
                    <div>
                        <img src={imgSrc} alt="projetos_img" />
                    </div>
                </section>

                <section className="projetos-section-dois">
                <div className="imgProjetos">
                  <img src={imgSrcc} alt="gradeprojetos" />
                </div>
                <div className="PROJETO_MALIBU">
                  <div>
                    <h1 className="titulo_um_projetos">PROJETO MALIBU</h1>
                  </div>
                  <div>
                    <h2 className="sub_um_projetos">
                    Liberdade e
                    performance
                    </h2>
                  </div>
                  <div className="paragrafos_um_projetos">
                    <p>
                    O Projeto Malibu é a combinação perfeita entre inovação e eficiência no universo dos alto giros. 
                    Desenvolvido para oferecer performance superior e estabilidade em voo, o Malibu traz design moderno, 
                    tecnologia de ponta e componentes de alta qualidade. Um projeto pensado para quem busca novas 
                    experiências nos céus com segurança e estilo.
                    </p>
                  </div>
                </div>
              </section>
              <section className="projetos-section-doiss">
                <div className="imgProjetos">
                  <img src={imgSrcc} alt="gradeprojetos" />
                </div>
                <div className="PROJETO_MALIBU">
                  <div>
                    <h1 className="titulo_um_projetos">PROJETO ORION</h1>
                  </div>
                  <div>
                    <h2 className="sub_um_projetos">
                    Precisão e
                    potência
                    </h2>
                  </div>
                  <div className="paragrafos_um_projetos">
                    <p>
                    Inspirado na leveza e na precisão do voo, o Projeto Orion nasce com o compromisso de redefinir o 
                    padrão de girocópteros. Com estrutura reforçada, aerodinâmica otimizada e alta confiabilidade mecânica, 
                    o Orion entrega desempenho excepcional em diferentes condições de operação. Um projeto criado para 
                    pilotos exigentes que não abrem mão da excelência.
                    </p>
                  </div>
                </div>
              </section>
              <section className="seessao_cinco">
                    <img src={Pater} alt="PATTERN" />
                </section>
              <footer className="rodape">
                <div className="container_rodape">
                    
                    <div className="conteiner-rodape-dois">
                        <div className="linha-topo">
                            <div className="contato">
                                <h3 >Contato</h3>
                                <div className="contato-item">
                                    <img src={local} alt="localização" />
                                    <p>Av. Mário Giacchero, 680 - Bairro Vila Helena<br />São Sebastião do Paraíso-MG - 37950000</p>
                                </div>
                                <div className="contato-item">
                                    <img src={tel} alt="telefone" />
                                    <p>(35) 9.9276-9912</p>
                                </div>
                                <div className="contato-item">
                                    <img src={tel} alt="telefone" />
                                    <p>(35) 9.9276-9912</p>
                                </div>
                                <div className="contato-item">
                                    <img src={email} alt="email" />
                                    <p>pegasus@sp.com.br</p>
                                </div>
                            </div>

                            <div className="nosso-site">
                                <h3>Nosso Site</h3>
                                <ul>
                                <li> <Link to="/SobreNos" >Sobre nós</Link ></li>
                                <li> <Link to="/projetos" >Serviços</Link></li>
                                <li><Link to="/Projetos" >Projetos</Link></li>
                                <li><Link to="/Contatos">Contato</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top">
                        <div className="logo">
                            <img src={logo} alt="Pegasus" />
                        </div>
                        <div className="redes-sociais">
                                <h3>Siga-nos</h3>
                                <div className="icones">
                                    <a href="https://www.facebook.com/sua_pagina" target="_blank" rel="noopener noreferrer">
                                        <img src={face} alt="Facebook" className="social-icon" id="facebook-icon" />
                                    </a>

                                    <a href="https://www.instagram.com/pegasusgirocopter/" target="_blank" rel="noopener noreferrer">
                                        <img src={insta} alt="Instagram" className="social-icon" id="instagram-icon" />
                                    </a>

                                    <a href="https://wa.me/553592769912" target="_blank" rel="noopener noreferrer">
                                        <img src={whats} alt="WhatsApp" className="social-icon" id="whatsapp-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="copyright">
                    <p>© Copyright - 2025. Pegasus. Todos os direitos reservados.</p>
                </div>
            </footer>
            </div>
        </div>
    )
}