import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, Sparkles } from "lucide-react";
import styles from "../css/CarritoCompras.module.css";
import { CarContext } from "../context/CarContext";

export default function CarritoComprasContainer() {
    const navigate = useNavigate();
    const { car, updateCartQuantity, removeFromCart, clearCart } = useContext(CarContext);

    const subtotal = car.reduce((total, item) => total + item.price * item.cantidad, 0);
    const totalItems = car.reduce((total, item) => total + item.cantidad, 0);
    const envio = car.length === 0 ? 0 : subtotal >= 500 ? 0 : 99;
    const total = subtotal + envio;

    if (car.length === 0) {
        return (
            <main className={styles["cart-page"]}>
                <section className={styles["cart-empty"]}>
                    <div className={styles["cart-empty-icon"]}>
                        <ShoppingBag size={42} />
                    </div>
                    <span>Carrito de compras</span>
                    <h1>Tu carrito está esperando ideas increíbles</h1>
                    <p>
                        Agrega productos personalizados y aquí verás cantidades, importes y
                        el resumen total de tu pedido.
                    </p>
                    <button
                        className={styles["checkout-btn"]}
                        onClick={() => navigate("/productos")}
                    >
                        Explorar productos
                    </button>
                </section>
            </main>
        );
    }

    return (
        <main className={styles["cart-page"]}>
            <section className={styles["cart-header"]}>
                <div>
                    <span>Carrito de compras</span>
                    <h1>Revisa tu pedido</h1>
                    <p>
                        Ajusta piezas, elimina productos y deja lista tu selección para solicitar
                        cotización.
                    </p>
                </div>

                <div className={styles["cart-header-side"]}>
                    <div className={styles["cart-header-chip"]}>
                        <Sparkles size={16} />
                        <strong>{totalItems}</strong>
                        <small>piezas</small>
                    </div>
                    <div className={styles["cart-header-icon"]}>
                        <ShoppingBag size={34} />
                    </div>
                </div>
            </section>

            <section className={styles["cart-layout"]}>
                <div className={styles["cart-items"]}>
                    {car.map((item) => (
                        <article className={styles["cart-item"]} key={item.id}>
                            <div className={styles["cart-img"]}>
                                <img src={item.image} alt={item.title} />
                            </div>

                            <div className={styles["cart-info"]}>
                                <span>{item.category || "Personalizado"}</span>
                                <h3>{item.title}</h3>
                                <p>Producción premium con acabados listos para cotización.</p>
                            </div>

                            <div className={styles["cart-qty"]}>
                                <button
                                    onClick={() => updateCartQuantity(item.id, item.cantidad - 1)}
                                    aria-label={`Reducir cantidad de ${item.title}`}
                                >
                                    <Minus size={15} />
                                </button>
                                <strong>{item.cantidad}</strong>
                                <button
                                    onClick={() => updateCartQuantity(item.id, item.cantidad + 1)}
                                    aria-label={`Aumentar cantidad de ${item.title}`}
                                >
                                    <Plus size={15} />
                                </button>
                            </div>

                            <div className={styles["cart-price"]}>
                                ${(item.price * item.cantidad).toFixed(2)} MXN
                            </div>

                            <button
                                className={styles["delete-btn"]}
                                onClick={() => removeFromCart(item.id)}
                                aria-label={`Eliminar ${item.title} del carrito`}
                            >
                                <Trash2 size={18} />
                            </button>
                        </article>
                    ))}
                </div>

                <aside className={styles["cart-summary"]}>
                    <h2>Resumen</h2>

                    <div className={styles["summary-row"]}>
                        <span>Productos</span>
                        <strong>{car.length}</strong>
                    </div>

                    <div className={styles["summary-row"]}>
                        <span>Piezas totales</span>
                        <strong>{totalItems}</strong>
                    </div>

                    <div className={styles["summary-row"]}>
                        <span>Subtotal</span>
                        <strong>${subtotal.toFixed(2)} MXN</strong>
                    </div>

                    <div className={styles["summary-row"]}>
                        <span>Envío</span>
                        <strong>{envio === 0 ? "Gratis" : `$${envio.toFixed(2)} MXN`}</strong>
                    </div>

                    <div className={styles["summary-row"]}>
                        <span>Producción</span>
                        <strong>Se confirma al cotizar</strong>
                    </div>

                    <div className={styles["summary-divider"]} />

                    <div className={styles["summary-total"]}>
                        <span>Total estimado</span>
                        <strong>${total.toFixed(2)} MXN</strong>
                    </div>

                    <button className={styles["checkout-btn"]}>Solicitar cotización</button>

                    <button
                        className={styles["continue-btn"]}
                        onClick={() => navigate("/productos")}
                    >
                        Seguir comprando
                    </button>

                    <button className={styles["ghost-btn"]} onClick={clearCart}>
                        Vaciar carrito
                    </button>
                </aside>
            </section>
        </main>
    );
}
