import styles from "../css/Navbar.module.css";
import CarritoCompras from "./CarritoCompras";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive ? `${styles.menuLink} ${styles.menuLinkActive}` : styles.menuLink;

  return (
    <header className={styles["nexo-navbar"]}>
      <div className={styles["nexo-logo"]}>
        <span>NEXO</span>
        <small>PRINT LAB</small>
      </div>

      <nav className={styles["nexo-menu"]}>
        <NavLink to="/" className={navClass}>Inicio</NavLink>
        <NavLink to="/servicios" className={navClass}>Servicios</NavLink>
        <NavLink to="/productos" className={navClass}>Productos</NavLink>
        <NavLink to="/galeria" className={navClass}>Galeria</NavLink>
        <NavLink to="/cotizador" className={navClass}>Cotizador</NavLink>
        <NavLink to="/nosotros" className={navClass}>Nosotros</NavLink>
        <NavLink to="/contacto" className={navClass}>Contacto</NavLink>
      </nav>

      <CarritoCompras className={styles["cart-btn"]} />
    </header>
  );
};

export default Navbar;
