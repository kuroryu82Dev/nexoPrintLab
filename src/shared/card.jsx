import { Heart, ShoppingCart } from "lucide-react";
import styles from "../css/Card.module.css";
import { useContext } from "react";
import { CarContext } from './../context/CarContext';

const CardComponent = ({imagen, categoria, titulo, descripcion,precio, ranking, onViewDetail }) => {
    
    const descripcionCorta =  descripcion.length > 50 ? `${descripcion.slice(0, 50)}...` : descripcion;
    const tituloCorto = titulo.length > 20 ? `${titulo.slice(0, 20)}...` : titulo;
    // eslint-disable-next-line no-unused-vars
    const {car} = useContext(CarContext);

    // eslint-disable-next-line no-unused-vars
    const onAdd=(cantidad)=>{}

    return (
        <div className={styles["nexo-product-card"]}>
            {/* BADGE */}
            <div className={styles["nexo-badge"]}>
                {categoria}
            </div>

            {/* Favorito */}
            <button className={styles["nexo-favorite-btn"]}>
                <Heart size={18} />
            </button>

            {/* Imagen del producto */}
            <div className={styles["product-image-container"]}>
                <img src={imagen} alt={tituloCorto} className={styles["image-container"]}/>    
            </div>
            

            {/* Info */}
            <div className={styles["product-info"]}>
                <h3>{tituloCorto}</h3>
                <p>{descripcionCorta}</p>
                <div className={styles["precio-producto"]}>
                    ${precio} MXN
                </div>

                {/* Reseña */}
                <div className={styles["product-footer"]}>
                    <div className={styles["stars"]}>
                        ★★★★★ <span>({ranking})</span>
                    </div>
                </div>

                

            </div>
            <div className={styles["footer-card"]}>
                <button className={styles["cart-btn"]} onClick={onAdd}>
                    <ShoppingCart size={18} />
                </button>
                <button className={styles["detail-btn"]} onClick={onViewDetail}>
                    Ver Detalle
                </button>
            </div>

        </div>

    );
};

export default CardComponent;
