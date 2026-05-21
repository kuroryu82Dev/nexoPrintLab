import styles from "../css/Navbar.module.css";
import CarritoCompras from "./CarritoCompras";
//import logo_nexo from '../assets/logo_nexo.png'
const Navbar = () => {
    return (
        <header className={styles["nexo-navbar"]}>
            <div className={styles["nexo-logo"]}>
            <span>NEXO</span>
            <small>PRINT LAB</small>
            </div>

            <nav className={styles["nexo-menu"]}>
            <a href="#inicio"> Inicio </a>
            <a href="#servicios">Servicios</a>
            <a className={styles.active} href="#productos">Productos</a>
            <a href="#galeria">Galería</a>
            <a href="#cotizador">Cotizador</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
            </nav>

            <CarritoCompras className={styles["cart-btn"]} />

        </header>
    );
};

export default Navbar;
