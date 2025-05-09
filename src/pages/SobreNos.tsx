import React from 'react';
import '../styles/stylesSobreNos.css';
import HeroSection from '../components/HeroSection';
import escudo1 from '../assets/escudo1.svg';
import escudo2 from '../assets/escudo2.svg';
import escudo3 from '../assets/escudo3.svg';
import Logo_sobre from '../assets/logo_sobre_nos.svg';
import logo from '../assets/LOGOTIPO_roda_pe.svg';
import email from '../assets/wpf_message.svg';
import local from '../assets/mdi_location.svg';
import tel from '../assets/bi_telephone-fill.svg';
import whats from '../assets/whats.svg';
import face from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';

export default function SobreNos() {
  return (
    <div className="SobreNos">
      <HeroSection />
        <div className="conteudo-principal_sobre">
            <section className="sessao_umm">
                <div className="img1">
                  <img src={escudo1} alt="escudo1" />
                </div>
                <div className="nossa_historia">
                  <div>
                    <h1 className="titulo_um">NOSSA HISTÓRIA</h1>
                  </div>
                  <div>
                    <h2 className="sub_um">
                      Uma história que nasceu na infância e virou legado
                    </h2>
                  </div>
                  <div className="paragrafos_um">
                    <p>
                      A história da Pegasus começou bem antes de sua fundação oficial — lá na infância do Cleber, no interior do Paraná. Filho de um homem visionário que
                      iniciou tudo com muito esforço, Cleber cresceu cercado por motores, peças e conversas sobre mecânica. Desde pequeno, já demonstrava interesse e ajudava
                      como podia, desenvolvendo, junto com o pai, uma verdadeira paixão pelo ramo.
                    </p>
                    <p>
                      Com o passar dos anos, esse vínculo se fortaleceu e virou propósito. A dedicação herdada e o amor pelo que faz foram essenciais para transformar um
                      sonho antigo em realidade. Assim nasceu a Pegasus: com raízes profundas, trabalho honesto e vontade de fazer diferente.
                    </p>
                    <p>
                      Mais do que vender, a empresa entrega confiança e experiência, mantendo o legado familiar vivo em cada atendimento e produto oferecido.
                    </p>
                  </div>
                </div>
              </section>

              <section className="sessao_doiss">
                <div className="img2">
                  <img src={escudo2} alt="escudo2" />
                </div>
                <div className="o_que_nos_move">
                  <div>
                  <h1 className="titulo_dois">O QUE NOS MOVE</h1>
                  </div>
                  <div>
                  <h2 className="sub_dois">O que nos impulsiona todos os dias</h2>
                  </div>
                  <div className="paragrafos_dois">
                    <p>
                      Na Pegasus, a agilidade é parte da essência. Nosso foco sempre foi trabalhar com alto giro, garantindo que os 
                      produtos certos estejam disponíveis na hora certa — com qualidade e preço competitivo. Entendemos que, 
                      no mercado atual, tempo é tudo. Por isso, estruturamos cada etapa do nosso processo para ser rápida, eficiente e sem 
                      complicações.
                    </p>
                    <p>
                      O que nos move é ver nossos parceiros abastecendo com velocidade, girando estoque com facilidade e crescendo junto com a gente. 
                      Mais do que vender, entregamos fluidez, confiança e resultado.
                    </p>
                  </div>
                </div>
              </section>

              <section className="sessao_tress">
                <div className="img3">
                  <img src={escudo3} alt="escudo3" />
                </div>
                <div className="visao">
                  <div>
                  <h1 className="titulo_tres">VISÃO</h1>
                  </div>
                  <div>
                  <h2 className="sub_tres">Olhar para frente, com os pés no chão</h2>
                  </div>
                  <div className="paragrafos_tres">
                    <p>
                      Na Pegasus, temos orgulho de onde viemos — mas é o futuro que nos impulsiona. Estamos sempre em busca de novas soluções, tecnologias e formas de otimizar nosso atendimento.
                    </p>
                    <p>
                      Crescer com responsabilidade, manter o padrão de qualidade e continuar fortalecendo laços com nossos clientes são compromissos que levamos a sério.
                    </p>
                    <p>
                      A estrada é longa, mas com trabalho honesto e parceria verdadeira, vamos sempre mais longe.
                    </p>
                  </div>
                </div>
              </section>

              <section className="sessao_quatroo">
                <div className="img4">
                  <img src={Logo_sobre} alt="Logo" />
                </div>
                <div className="PEGASUS_sobre">
                  <div>
                    <h1 className="titulo_quatro">PEGASUS</h1>
                  </div>
                  <div>
                  <h2 className="sub_quatro">Escolher a Pegasus é
                  escolher alta performance</h2>
                  </div>
                  <div className="paragrafos_quatro">
                    <p>
                    Escolher a Pegasus é optar por um parceiro de negócios que entende a dinâmica do mercado e a importância da 
                    rapidez. Trabalhamos com um modelo de alto giro, que garante produtos sempre atualizados e com estoque 
                    rotacionado, permitindo que nossos clientes tenham o que precisam, quando precisam.
                    </p>
                    <p>
                    Nosso compromisso é com a eficiência: desde o atendimento até a entrega. Estamos aqui para fornecer soluções 
                    rápidas, garantir a reposição constante e, acima de tudo, agregar valor ao seu negócio, com preços acessíveis 
                    e qualidade inegociável.
                    </p>
                  </div>
                </div>
              </section>
            </div>
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
                                    <li><a href="#" >Sobre nós</a></li>
                                    <li><a href="#" >Serviços</a></li>
                                    <li><a href="#" >Projetos</a></li>
                                    <li><a href="#">Contato</a></li>
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
  );
}