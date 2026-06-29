import style from "../css/Footer.module.css";

import { Camera, Send, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {

    const year = new Date().getFullYear();

    return (

        <footer className={style.footer}>

            <div className={style.container}>

                {/* Logo */}

                <div className={style.logoSection}>

                    <h2>Nexo Print Lab</h2>

                    <p>
                        Transformamos tus ideas en productos personalizados
                        con la mejor calidad en impresión DTF,
                        sublimación y vinil textil.
                    </p>

                    <div className={style.social}>

                        <a href="#">
                            <MessageCircle size={20} />
                        </a>

                        <a href="#">
                            <Camera size={20} />
                        </a>

                        <a href="#">
                            <Send size={20} />
                        </a>

                    </div>

                </div>

                {/* Navegación */}

                <div>

                    <h3>Navegación</h3>

                    <ul>

                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Servicios</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>

                    </ul>

                </div>

                {/* Servicios */}

                <div>

                    <h3>Servicios</h3>

                    <ul>

                        <li>DTF</li>
                        <li>Sublimación</li>
                        <li>Vinil Textil</li>
                        <li>Bordado</li>
                        <li>Diseño</li>

                    </ul>

                </div>

                {/* Contacto */}

                <div>

                    <h3>Contacto</h3>

                    <ul>

                        <li>
                            <Phone size={16} />
                            55 3716 4866
                        </li>

                        <li>
                            <Mail size={16} />
                            contacto@nexoprintlab.mx
                        </li>

                        <li>
                            <MapPin size={16} />
                            Estado de México
                        </li>

                    </ul>

                </div>

            </div>

            <div className={style.copy}>

                © {year} Nexo Print Lab.
                Todos los derechos reservados.

            </div>

        </footer>

    );

};

export default Footer;
