import '../styles/stylesButtonSaibaMais.css';
import Vector from '../assets/Seta2.svg';
import { Link } from 'react-router-dom';

export default function Saiba_Mais({ 
  variant = "", 
  iconVariant = Vector, 
  titulo = "O que esse botao faz", 
  to = "/SobreNos" // permite customizar o destino
}) {
  return (
    <Link 
      className={`button_saibamais ${variant}`} 
      to={to}
    >
      {titulo}
      <img 
        src={iconVariant} 
        alt="Seta" 
        className="vector-icon"
      />
    </Link>
  );
}