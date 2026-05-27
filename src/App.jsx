
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import ProductosContainer from './components/ProductosConteiner';
import InicioContainer from './components/InicioContainer';

function App() {
  return (
    <>
    <Navbar />
    {/*<InicioContainer /> */}
    <Routes>
      <Route path="/" element={<InicioContainer/>} />
      <Route path="/servicios" element={<h1 style={{ color: 'white' }}>Servicios</h1>} />
      <Route path="/productos" element={<ProductosContainer />} />
      {/* <Route path="/galeria" element={<h1 style={{ color: 'white' }}>Galeria</h1>} /> */}
      <Route path="/cotizador" element={<h1 style={{ color: 'white' }}>Cotizador</h1>} />
      <Route path="/nosotros" element={<h1 style={{ color: 'white' }}>Nosotros</h1>} />
      <Route path="/contacto" element={<h1 style={{ color: 'white' }}>Contacto</h1>} />
    </Routes>
    </>
  )
}

export default App
