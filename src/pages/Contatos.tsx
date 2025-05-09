import HeroSection from "../components/HeroSection";
import contatos_img from "../assets/Component_contatos.svg";
import "../styles/stylesContatos.css";
import local_contatos from "../assets/Local_contatos.svg";
import tel_contato from "../assets/Tel_contatos.svg";
import Whats_contato from "../assets/Whats_contatos.svg";
import face_contato from "../assets/Face_contatos.svg";
import insta_contato from "../assets/Insta_contatos.svg";
import logo from '../assets/LOGOTIPO_roda_pe.svg';
import email from '../assets/wpf_message.svg';
import local from '../assets/mdi_location.svg';
import tel from '../assets/bi_telephone-fill.svg';
import whats from '../assets/whats.svg';
import face from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import { Link } from 'react-router-dom';
import Pater from '../assets/PATTERNTop.svg'
export default function Contatos(){
    return(
        <div className="Contatos">
        <HeroSection />
            <div className="conteudo-principal_contatos">
                <section className="contatos-section-um">
                    <div>
                        <img src={contatos_img} alt="contatos_img" />
                    </div>
                </section>
                <section className="contatos-section-dois">
                <div className="Contatos-texto">
                                <ul>
                                <li>
                                    <p className="titulo_contato">Nosso endereço:</p>
                                    <a className="item-contatos" href="https://g.co/kgs/Dyckeug" target="_blank">
                                        <img src={local_contatos} alt="local_contatos" />
                                        <p className="item-contatoss">Av. Mário Giacchero, 680 - Bairro Vila Helena 
                                             <br/>São Sebastião do Paraíso-MG - 37950000</p>
                                    </a> 
                                </li>
                                <li>
                                    <p className="titulo_contato">Telefone:</p>
                                    <a className="item-contatos" href="tel:+553592769912" target="_blank">
                                        <img src={tel_contato} alt="tel_contato" />
                                        <p className="item-contatoss">(35) 9.9276-9912</p>
                                    </a> 

                                </li>
                                <li>
                                    <p className="titulo_contato">WhatsApp:</p>
                                    <a className="item-contatos" href="https://wa.me/553592769912" target="_blank">
                                        <img src={Whats_contato} alt="Whats_contato" />
                                        <p className="item-contatoss">(35) 9.9276-9912</p>
                                    </a> 
                                </li>
                                <li>
                                    <p className="titulo_contato">Redes Sociais:</p>
                                        <a className="item-ultimos" href="https://www.facebook.com/sua_pagina" target="_blank">
                                            <img src={face_contato} alt="face_contato" />
                                            <p className="item-contatoss"> @pegasusgirocopter</p>
                                        </a> 
                                        <a className="item-ultimos" href="https://www.instagram.com/pegasusgirocopter/" target="_blank">
                                        <img src={insta_contato} alt="insta_contato" />
                                        <p className="item-contatoss">@pegasusgirocopter</p>
                                        </a> 
                                </li>
                                </ul>
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
                                <li> <Link to="/Servicos" >Serviços</Link></li>
                                <li> <Link to="/Projetos" >Projetos</Link></li>
                                <li> <Link to="/Contatos">Contato</Link></li>
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
);
}