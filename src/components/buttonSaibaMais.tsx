import '../styles/stylesButtonSaibaMais.css';
import Vector from '../assets/Seta2.svg';

export default function Saiba_Mais({ 
  variant = "", 
  iconVariant = Vector, 
  titulo = "O que esse botao faz" 
}) {
  return (
    <a 
      className={`button_saibamais ${variant}`} 
      href='../pages/SobreNos/index'  // Atualize para o caminho correto
      target="_blank" 
      rel="noopener noreferrer"
    >
      {titulo}
      <img 
        src={iconVariant} 
        alt="Seta" 
        className="vector-icon"
      />
    </a>
  );
}