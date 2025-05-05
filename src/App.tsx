import React from 'react';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <div 
      className="App"
      style={{
        backgroundColor: 'black', // Fundo preto
        minHeight: '100vh',       // Cobrir toda a altura da viewport
        width: '100%',            // Largura total
        margin: 0,                // Remover margens padrão
        padding: 0               // Remover paddings padrão
      }}
    >
      <Home></Home>
    </div>
  );
}

export default App;