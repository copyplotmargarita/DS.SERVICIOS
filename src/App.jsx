import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import { Home } from './pages/Home';
import { Servicios } from './pages/Servicios';
import { QuienesSomos } from './pages/QuienesSomos';
import { Contacto } from './pages/Contacto';
import { Cotizador } from './pages/Cotizador';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="cotizador" element={<Cotizador />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
