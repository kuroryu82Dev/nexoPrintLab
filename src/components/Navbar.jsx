import styles from "../css/Navbar.module.css";
import CarritoCompras from "./CarritoCompras";
import { NavLink } from "react-router-dom";
import TextoLogo from './../shared/TextoLogo';

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive ? `${styles.menuLink} ${styles.menuLinkActive}` : styles.menuLink;

  return (
    <header className={styles["nexo-navbar"]}>

      <TextoLogo/>
      <nav className={styles["nexo-menu"]}>
        <NavLink to="/" className={navClass}>Inicio</NavLink>
        <NavLink to="/servicios" className={navClass}>Servicios</NavLink>
        <NavLink to="/productos" className={navClass}>Productos</NavLink>
        {/* <NavLink to="/galeria" className={navClass}>Galeria</NavLink> */}
        <NavLink to="/cotizador" className={navClass}>Cotizador</NavLink>
        <NavLink to="/nosotros" className={navClass}>Nosotros</NavLink>
        <NavLink to="/contacto" className={navClass}>Contacto</NavLink>
        <NavLink to="/carrito" className={navClass}>Carrito</NavLink>
      </nav>

      <CarritoCompras className={styles["cart-btn"]} />
    </header>
  );
};

export default Navbar;
