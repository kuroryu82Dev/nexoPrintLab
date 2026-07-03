
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import ProductosContainer from './components/ProductosContainer';
import InicioContainer from './components/InicioContainer';
//importar al contexto del carrito de compras
import { CarProvider } from './context/CarContext';
import CarritoComprasContainer from './components/CarritoComprasContainer';
import Footer from './shared/Footer';
import OrdenesContainer from './components/OrdenesContainer';

function App() {
  return (
    <>
    <CarProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioContainer/>} />
        <Route path="/servicios" element={<h1 style={{ color: 'white' }}>Servicios</h1>} />
        <Route path="/productos" element={<ProductosContainer />} />
        {/* <Route path="/galeria" element={<h1 style={{ color: 'white' }}>Galeria</h1>} /> */}
        <Route path="/cotizador" element={<h1 style={{ color: 'white' }}>Cotizador</h1>} />
        <Route path="/nosotros" element={<h1 style={{ color: 'white' }}>Nosotros</h1>} />
        <Route path="/contacto" element={<h1 style={{ color: 'white' }}>Contacto</h1>}/>
        <Route path="/carrito" element={<CarritoComprasContainer />} />
        <Route path="/ordenes" element={<OrdenesContainer />} />
      </Routes>
    </CarProvider>
    <Footer /> 
    </>
  )
}

export default App
