import styles from "../css/ProductosModal.module.css";
import { useState } from 'react';

const ProductosModal = ({ producto, onClose, onAddToCart, mode }) => {

    const [cantidad, setCantidad] = useState(1);

    const incrementar = () =>{setCantidad((prev) => prev + 1)};
    const decrementar = () =>{setCantidad((prev) => prev > 1 ? prev - 1 : 1)};

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

                {
                    mode === "cart" && (
                        <div className={styles["modal-actions"]}>
                            <div className={styles["quantity-box"]}>
                                <span className={styles["quantity-label"]}>Piezas</span>

                                <div className={styles["quantity-controls"]}>
                                    <button onClick={decrementar} className={styles["qty-btn"]}>
                                        -
                                    </button>
                                    <span className={styles["quantity-value"]}>{cantidad}</span>
                                    <button onClick={incrementar} className={styles["qty-btn"]}>
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                className={styles["add-cart-btn"]}
                                onClick={() => onAddToCart(producto, cantidad)}
                            >
                                Agregar al carrito
                            </button>
                        </div>

                    )

                }

            </div>
        </div>
    );
};

export default ProductosModal;
