import style from "../css/Header.module.css";

const PageHeader = ({titulo, subtitulo, imagen}) => {
    return(
    <section 
        className={style["page"]}
        style={{
            backgroundImage:`
            url(${imagen})
            `
        }}
    >
        <div className={`${style["contenido"]} ${style["texto-heroe"]}`}>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </div>
    </section>        
    )

};

export default PageHeader;
