import style from "../css/Header.module.css";
import { ArrowRight, PlayCircle } from "lucide-react";

const PageHeader = ({
    titulo,
    subtitulo,
    imagen,
    mostrarBotones = false,
    botonPrincipal = "Ver productos",
    botonSecundario = "Solicitar cotización",
    onBotonPrincipal,
    onBotonSecundario
}) => {

    return (

        <section
            className={style.page}
            style={{
                backgroundImage: `
                    linear-gradient(
                        90deg,
                        rgba(5,7,11,.95) 0%,
                        rgba(5,7,11,.78) 35%,
                        rgba(5,7,11,.45) 60%,
                        rgba(5,7,11,.08) 100%
                    ),
                    url(${imagen})
                `
            }}
        >

            <div className={style.contenido}>

                <span className={style.badge}>
                    NEXO PRINT LAB
                </span>

                <h1>{titulo}</h1>

                <p>{subtitulo}</p>

                {
                    mostrarBotones &&
                    <div className={style.botones}>

                        <button
                            className={style.btnPrimary}
                            onClick={onBotonPrincipal}
                        >
                            {botonPrincipal}
                            <ArrowRight size={18} />
                        </button>

                        <button
                            className={style.btnSecondary}
                            onClick={onBotonSecundario}
                        >
                            <PlayCircle size={18} />
                            {botonSecundario}
                        </button>

                    </div>
                }

            </div>

        </section>

    );

};

export default PageHeader;