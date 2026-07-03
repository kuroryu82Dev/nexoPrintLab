import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, Sparkles, CheckCircle2, AlertCircle, X } from "lucide-react";
import styles from "../css/CarritoCompras.module.css";
import { CarContext } from "../context/CarContext";
import { createOrder } from "../service/OrdenServiceFirebase";

export default function CarritoComprasContainer() {
    const navigate = useNavigate();
    const { car, updateCartQuantity, removeFromCart, clearCart } = useContext(CarContext);
    const [orderId, setOrderId] = useState("");
    const [orderError, setOrderError] = useState("");
    const [isCreatingOrder, setIsCreatingOrder] = useState(false);
    const [notification, setNotification] = useState(null);
    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });

    const subtotal = car.reduce((total, item) => total + item.price * item.cantidad, 0);
    const totalItems = car.reduce((total, item) => total + item.cantidad, 0);
    const envio = car.length === 0 ? 0 : subtotal >= 500 ? 0 : 99;
    const total = subtotal + envio;

    const handleCreateOrder = async () => {
        setOrderId("");
        setOrderError("");
        setNotification(null);

        const hasBuyerData = buyer.nombre.trim() && buyer.email.trim() && buyer.telefono.trim();

        if (!hasBuyerData) {
            const nextError = "Completa los datos del comprador para registrar la orden.";

            setOrderError(nextError);
            setNotification({
                type: "error",
                title: "Faltan datos del comprador",
                message: nextError
            });
            return;
        }

        setIsCreatingOrder(true);

        try {
            const nextOrderId = await createOrder({
                buyer: {
                    nombre: buyer.nombre.trim(),
                    email: buyer.email.trim(),
                    telefono: buyer.telefono.trim()
                },
                items: car,
                subtotal,
                envio,
                total,
                totalItems
            });

            setOrderId(nextOrderId);
            setBuyer({
                nombre: "",
                email: "",
                telefono: ""
            });
            setNotification({
                type: "success",
                title: "Orden de compra registrada",
                message: `Tu cotizacion fue enviada correctamente. Folio: ${nextOrderId}`
            });
            clearCart();
        } catch (error) {
            const errorMessage = error.message || "";
            const isConfigError = errorMessage.includes("variables de entorno");
            const isDatabaseMissingError = errorMessage.includes("not found") && errorMessage.includes("Database");
            const isPermissionError = error.code === "permission-denied";
            let nextError = "No se pudo registrar la orden. Intenta de nuevo.";

            if (isConfigError) {
                nextError = "Configura las variables de Firebase para registrar la orden.";
            }

            if (isDatabaseMissingError) {
                nextError = "Crea la base de datos Firestore en Firebase Console para registrar la orden.";
            }

            if (isPermissionError) {
                nextError = "Las reglas de Firestore no permiten registrar la orden.";
            }

            setOrderError(nextError);
            setNotification({
                type: "error",
                title: "No se registro la orden",
                message: nextError
            });
        } finally {
            setIsCreatingOrder(false);
        }
    };

    const orderNotification = notification && (
        <div
            className={`${styles["order-notification"]} ${styles[`order-notification-${notification.type}`]}`}
            role="status"
            aria-live="polite"
        >
            <div className={styles["order-notification-icon"]}>
                {notification.type === "success" ? (
                    <CheckCircle2 size={22} />
                ) : (
                    <AlertCircle size={22} />
                )}
            </div>
            <div>
                <strong>{notification.title}</strong>
                <p>{notification.message}</p>
            </div>
            <button
                type="button"
                onClick={() => setNotification(null)}
                aria-label="Cerrar notificacion"
            >
                <X size={16} />
            </button>
        </div>
    );

    if (car.length === 0) {
        return (
            <main className={styles["cart-page"]}>
                {orderNotification}
                <section className={styles["cart-empty"]}>
                    <div className={styles["cart-empty-icon"]}>
                        <ShoppingBag size={42} />
                    </div>
                    <span>Carrito de compras</span>
                    <h1>
                        {orderId
                            ? "Tu orden fue registrada"
                            : "Tu carrito está esperando ideas increíbles"}
                    </h1>
                    {orderId ? (
                        <p>
                            Número de orden: <strong>{orderId}</strong>. Guarda este folio para dar seguimiento.
                        </p>
                    ) : (
                        <p>
                            Agrega productos personalizados y aquí verás cantidades, importes y
                            el resumen total de tu pedido.
                        </p>
                    )}
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
            {orderNotification}
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

                    <div className={styles["buyer-form"]}>
                        <h3>Datos del comprador</h3>

                        <label>
                            Nombre
                            <input
                                type="text"
                                value={buyer.nombre}
                                onChange={(event) =>
                                    setBuyer((prevBuyer) => ({
                                        ...prevBuyer,
                                        nombre: event.target.value
                                    }))
                                }
                                placeholder="Nombre completo"
                            />
                        </label>

                        <label>
                            Email
                            <input
                                type="email"
                                value={buyer.email}
                                onChange={(event) =>
                                    setBuyer((prevBuyer) => ({
                                        ...prevBuyer,
                                        email: event.target.value
                                    }))
                                }
                                placeholder="correo@ejemplo.com"
                            />
                        </label>

                        <label>
                            Telefono
                            <input
                                type="tel"
                                value={buyer.telefono}
                                onChange={(event) =>
                                    setBuyer((prevBuyer) => ({
                                        ...prevBuyer,
                                        telefono: event.target.value
                                    }))
                                }
                                placeholder="10 digitos"
                            />
                        </label>
                    </div>

                    {orderError && (
                        <div className={styles["order-error"]}>
                            {orderError}
                        </div>
                    )}

                    <button
                        className={styles["checkout-btn"]}
                        onClick={handleCreateOrder}
                        disabled={isCreatingOrder}
                    >
                        {isCreatingOrder ? "Registrando..." : "Solicitar cotización"}
                    </button>

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
