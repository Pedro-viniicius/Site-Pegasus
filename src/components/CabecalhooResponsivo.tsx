import React, { useState, useEffect } from "react";
import Cabecalho from "./cabecalho";
import CabecalhoMobile from './cabecalhoMobile';

const CabecalhoResponsivo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Inicializa o estado com o valor correto ao montar o componente
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <CabecalhoMobile /> : <Cabecalho />;
};

export default CabecalhoResponsivo;