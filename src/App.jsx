import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import SobreNos from './pages/SobreNos/index.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}