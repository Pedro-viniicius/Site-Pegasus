import CabecalhoResponsivo from "../../components/CabecalhooResponsivo"
import Saiba_Mais from "../../components/buttonSaibaMais"
import '../../styles/stylesHome.css'
import '../../styles/stylesMobileHome.css'
import girocopteros from '../../assets/autogiro_sessao2.svg'
import girocopteross from '../../assets/Auto1.svg'
import girocopterosss from '../../assets/Auto2.svg'
import vectorVermelho from '../../assets/Seta.svg'
import Exlusividade from '../../assets/Exclusivo.svg'
import Seguranca from '../../assets/Seguranca.svg'
import Atendimento from '../../assets/Atendimento.svg'
import Pater from '../../assets/PATTERNTop.svg'
import logo from '../../assets/LOGOTIPOVctor.svg'
import email from '../../assets/wpf_message.svg'
import local from '../../assets/mdi_location.svg'
import tel from '../../assets/bi_telephone-fill.svg'
import whats from '../../assets/whats.svg'
import face from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'
import HeroSection from "./HeroSection"

export default function Home() {
    return (
        <div className="Home">

            <HeroSection />

            <div className="conteudo-principal">
                <section className="sessao_dois">
                    <div className="sobre_pegasus">
                        <h1>SOBRE A PEGASUS</h1>
                        <h2>Somos os primeiros na região
                            produzindo alto giros</h2>
                        <h3><p>A Pegasus surgiu com a missão de oferecer produtos de alta qualidade e preços acessíveis, atendendo
                            à crescente demanda do mercado por soluções rápidas e eficientes. Fundada em 2021 , a empresa começou com um pequeno
                            estoque e um tempo enxuto, mas desde o início apostou em um modelo de alto giro para manter seus produtos sempre
                            atualizados e competitivos.</p>
                            
                            <p>Com um sistema logístico otimizado e estratégias de precificação inteligente, a empresa cresceu rapidamente,
                            conquistando clientes fiéis e expandindo sua presença no mercado.</p>

                            <p>A agilidade no reabastecimento e a diversificação do portfólio foram fundamentais para esse sucesso, permitindo
                            atender desde pequenos negócios até grandes distribuidores. Hoje, a Pegasus se consolida como referência no setor,
                            mantendo o compromisso com inovação e eficiência.</p></h3>

                            <Saiba_Mais variant="pegasus" iconVariant={vectorVermelho} titulo="SAIBA MAIS" />
                    </div>
                    <div className="imagem-girocoptero">
                            <img src={girocopteros} alt="girocopteros" />
                    </div>
                </section>
                <section className="sessao_tres">
                    <div className="projetos">
                        <div className="textoArea">
                            <h1>DESIGN E PROJETOS</h1>
                            <h2>Os nossos<br />
                                novos projetos</h2>
                            <h3>Conheça alguns dos projetos <br />que desenvolvemos na nossa<br /> empresa.
                                Cada Projeto foi<br /> desenvolvido estrategicamente <br />para cada tipo de necessidade.</h3>
                            <Saiba_Mais variant="pegasus" iconVariant={vectorVermelho} titulo="VER TODOS" />

                        </div>
                        <div className="imagensProjetos">
                            <img src={girocopteross} alt="girocopteros" />
                            <img src={girocopterosss} alt="girocopteros" />
                        </div>

                    </div>
                </section>
                <section className="sessao_quatro">
                    <div className="container-cards">
                        <div className="cards_wrapper">
                            <div className="card">
                                <div className="icon">
                                    <img src={Exlusividade} alt="Ícone de exclusividade" />
                                </div>
                                <h3>Exclusividade</h3>
                                <p>Produtos selecionados com exclusividade.</p>
                            </div>

                            <div className="card">
                                <div className="icon">
                                    <img src={Seguranca} alt="Ícone de segurança" />
                                </div>
                                <h3>Segurança</h3>
                                <p>Segurança e confiança em cada etapa do processo.</p>
                            </div>

                            <div className="card">
                                <div className="icon">
                                    <img src={Atendimento} alt="Ícone de atendimento" />
                                </div>
                                <h3>Atendimento</h3>
                                <p>Atendimento ágil, personalizado e eficiente.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="seessao_cinco">
                    <img src={Pater} alt="PATTERN" />
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
        </div >
    )
}