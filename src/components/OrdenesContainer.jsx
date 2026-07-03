import { useEffect, useState } from "react";
import { ClipboardList, Mail, Phone, UserRound } from "lucide-react";
import { getOrders } from "../service/OrdenServiceFirebase";
import styles from "../css/OrdenesContainer.module.css";

const formatMoney = (value) => `$${Number(value || 0).toFixed(2)} MXN`;

export default function OrdenesContainer() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadOrders = async () => {
            setLoading(true);
            setError("");

            try {
                const nextOrders = await getOrders();
                setOrders(nextOrders);
            } catch (ordersError) {
                console.error("Error fetching ordenes:", ordersError);
                setError(
                    ordersError.code === "permission-denied"
                        ? "Las reglas de Firestore no permiten leer las ordenes."
                        : "No se pudieron cargar las ordenes."
                );
            } finally {
                setLoading(false);
            }
        };

        loadOrders();
    }, []);

    return (
        <main className={styles["orders-page"]}>
            <section className={styles["orders-header"]}>
                <div className={styles["orders-header-icon"]}>
                    <ClipboardList size={34} />
                </div>
                <div>
                    <span>Firebase / Firestore</span>
                    <h1>Ordenes de compra</h1>
                    <p>Consulta las ordenes registradas desde el carrito.</p>
                </div>
            </section>

            {loading && <div className={styles["orders-message"]}>Cargando ordenes...</div>}
            {error && <div className={styles["orders-error"]}>{error}</div>}

            {!loading && !error && orders.length === 0 && (
                <div className={styles["orders-message"]}>No hay ordenes registradas.</div>
            )}

            {!loading && !error && orders.length > 0 && (
                <section className={styles["orders-list"]}>
                    {orders.map((order) => (
                        <article className={styles["order-card"]} key={order.id}>
                            <div className={styles["order-card-head"]}>
                                <div>
                                    <span>Folio</span>
                                    <h2>{order.folio || order.id}</h2>
                                </div>
                                <strong>{order.status || "pendiente"}</strong>
                            </div>

                            <div className={styles["buyer-grid"]}>
                                <div>
                                    <UserRound size={16} />
                                    <span>{order.comprador?.nombre || "Sin nombre"}</span>
                                </div>
                                <div>
                                    <Mail size={16} />
                                    <span>{order.comprador?.email || "Sin email"}</span>
                                </div>
                                <div>
                                    <Phone size={16} />
                                    <span>{order.comprador?.telefono || "Sin telefono"}</span>
                                </div>
                            </div>

                            <div className={styles["items-list"]}>
                                {(order.items || []).map((item) => (
                                    <div className={styles["order-item"]} key={`${order.id}-${item.id}`}>
                                        <span>{item.title}</span>
                                        <small>
                                            {item.cantidad} x {formatMoney(item.price)}
                                        </small>
                                        <strong>{formatMoney(item.subtotal)}</strong>
                                    </div>
                                ))}
                            </div>

                            <div className={styles["order-total"]}>
                                <span>{order.createdAtText}</span>
                                <strong>{formatMoney(order.total)}</strong>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    );
}
