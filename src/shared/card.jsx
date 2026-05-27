import { Heart, ShoppingCart } from "lucide-react";
import styles from "../css/Card.module.css";

const CardComponent = ({imagen, categoria, titulo, descripcion,precio, ranking}) => {
    
    const descripcionCorta =  descripcion.length > 50 ? `${descripcion.slice(0, 50)}...` : descripcion;

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
                <img src={imagen} alt={titulo} className={styles["image-container"]}/>    
            </div>
            

            {/* Info */}
            <div className={styles["product-info"]}>
                <h3>{titulo}</h3>
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

                <button className={styles["cart-btn"]}>
                    <ShoppingCart size={18} />
                </button>

            </div>

        </div>

    );
};

export default CardComponent;
