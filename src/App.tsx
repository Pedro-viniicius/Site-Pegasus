import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';

const App: React.FC = () => {
  return (
    <div 
      className="App"
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: 0
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Contatos" element={<Contatos />} />
      </Routes>
    </div>
  );
}

export default App;