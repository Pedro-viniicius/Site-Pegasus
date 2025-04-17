import React, { useState, useEffect } from "react";
import Cabecalho from "./cabecalho";
import CabecalhoMobile from "./cabecalhoMobile";

const CabecalhoResponsivo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 428);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <CabecalhoMobile /> : <Cabecalho />;
};

export default CabecalhoResponsivo;