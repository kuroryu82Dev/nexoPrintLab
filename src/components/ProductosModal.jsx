import styles from "../css/ProductosModal.module.css";

const ProductosModal = ({ producto, onClose }) => {
    return (
        <div className={styles["modal-overlay"]} onClick={onClose}>
            <div className={styles["modal-content"]} onClick={(event) => event.stopPropagation()}>
                <button className={styles["modal-close"]} onClick={onClose} aria-label="Cerrar detalle">
                    X
                </button>
                <div className={styles["modal-image-wrap"]}>
                    <img
                        src={producto.image}
                        alt={producto.title}
                        className={styles["modal-image"]}
                    />
                </div>
                <span className={styles["modal-category"]}>DTF</span>
                <h2 className={styles["modal-title"]}>{producto.title}</h2>
                <p className={styles["modal-description"]}>{producto.description}</p>
                <strong className={styles["modal-price"]}>${producto.price} MXN</strong>
            </div>
        </div>
    );
};

export default ProductosModal;
