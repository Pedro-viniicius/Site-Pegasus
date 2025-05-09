import HeroSection from "../components/HeroSection";
import servicos_img from "../assets/Servicos-componet.svg";
import '../styles/stylesServicos.css';
import helice from "../assets/helice.svg";
import manutencao from "../assets/manutencao.svg";
import pecas_carro from "../assets/pecas_do_carro.svg";
import logo from '../assets/LOGOTIPO_roda_pe.svg';
import email from '../assets/wpf_message.svg';
import local from '../assets/mdi_location.svg';
import tel from '../assets/bi_telephone-fill.svg';
import whats from '../assets/whats.svg';
import face from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import { Link } from "react-router-dom";
import Pater from '../assets/PATTERNTop.svg'

export default function Servicos() {
    console.log("Servicos component rendered");
  return (

    <div className="Servicos">
      <HeroSection/>
      <div className="conteudo-principal-servicos">
        <section className="servicos-section-um">
          <div>
            <img src={servicos_img} alt="servicos_img" />
          </div>
        </section>

        <section className="servicos-section-dois">
                <div className="imgServicos">
                  <img src={helice} alt="helice" />
                </div>
                <div className="COMPRE_CONOSCO">
                  <div>
                    <h1 className="titulo_um_servicos">COMPRE CONOSCO</h1>
                  </div>
                  <div>
                    <h2 className="sub_um_servicos">
                    Venda de aeronaves
                    de alto giro
                    </h2>
                  </div>
                  <div className="paragrafos_um_servicos">
                    <p>
                    Trabalhamos com a comercialização de girocópteros de alto desempenho, ideais para quem busca segurança, 
                    versatilidade e liberdade nos voos.
                    </p>
                    <p>
                    Cada aeronave passa por uma criteriosa avaliação técnica, garantindo confiabilidade desde a decolagem até o pouso.
                    </p>
                  </div>
                </div>
              </section>

              <section className="servicos-section-dois">
                <div className="imgServicos">
                  <img src={manutencao} alt="manutencao" />
                </div>
                <div className="COMPRE_CONOSCO">
                  <div>
                    <h1 className="titulo_um_servicos">MANUTENÇÃO</h1>
                  </div>
                  <div>
                    <h2 className="sub_um_servicos">
                    Manutenção especializada
                    em aeronaves
                    </h2>
                  </div>
                  <div className="paragrafos_um_servicos">
                    <p>
                    Oferecemos manutenção preventiva e corretiva para girocópteros, com equipe técnica qualificada e equipamentos de ponta.
                    </p>
                    <p>
                    Da revisão de sistemas ao reparo de componentes, tudo é feito com precisão, 
                    respeitando os mais altos padrões de segurança aeronáutica.
                    </p>
                  </div>
                </div>
              </section>

              <section className="servicos-section-dois">
                <div className="imgServicos">
                  <img src={pecas_carro} alt="pecas_carro" />
                </div>
                <div className="COMPRE_CONOSCO">
                  <div>
                    <h1 className="titulo_um_servicos">VENDA DE PEÇAS</h1>
                  </div>
                  <div>
                    <h2 className="sub_um_servicos">
                    Venda de peças para
                    aeronaves
                    </h2>
                  </div>
                  <div className="paragrafos_um_servicos">
                    <p>
                    Disponibilizamos uma linha completa de peças e componentes para girocópteros.
                    </p>
                    <p>
                    Nossas peças são homologadas, garantindo a performance ideal da aeronave e a 
                    tranquilidade de quem voa com responsabilidade.
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
                                <li> <Link to="/Servicos" >Serviços</Link></li>
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
  );
}