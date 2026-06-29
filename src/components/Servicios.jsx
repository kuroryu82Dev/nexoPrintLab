import style from "../css/Servicios.module.css";

import shield from "../assets/icons/shield.svg";
import lightning from "../assets/icons/lightning.svg";
import support from "../assets/icons/support.svg";
import lock from "../assets/icons/lock.svg";

const data = [
    {
        titulo: "Calidad Garantizada",
        descripcion: "Materiales premium para una impresión impecable.",
        icono: shield
    },
    {
        titulo: "Producción Rápida",
        descripcion: "Entregamos tus pedidos en el menor tiempo posible.",
        icono: lightning
    },
    {
        titulo: "Soporte 24/7",
        descripcion: "Siempre disponibles para ayudarte.",
        icono: support
    },
    {
        titulo: "Compra Segura",
        descripcion: "Protegemos tus pagos y tus pedidos.",
        icono: lock
    }
];

const Servicios = () => {

    return (

        <section className={style.servicios}>

            <div className={style.titulo}>

                <span>NUESTROS BENEFICIOS</span>

                <h2>
                    ¿Por qué elegir
                    <br />
                    Nexo Print Lab?
                </h2>

            </div>

            <div className={style.grid}>

                {
                    data.map((item, index) => (

                        <div
                            key={index}
                            className={style.card}
                        >

                            <img
                                src={item.icono}
                                alt={item.titulo}
                            />

                            <h3>{item.titulo}</h3>

                            <p>{item.descripcion}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );

};

export default Servicios;