import { collection, doc, getDocs, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "../firebase/config";

export const createOrder = async ({ buyer, items, subtotal, envio, total, totalItems }) => {
    const db = getFirebaseDb();
    const orderRef = doc(collection(db, "ordenesCompra"));

    const order = {
        folio: orderRef.id,
        tipo: "orden_compra",
        comprador: {
            nombre: buyer.nombre,
            email: buyer.email,
            telefono: buyer.telefono
        },
        items: items.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            cantidad: item.cantidad,
            category: item.category || "Personalizado",
            image: item.image || "",
            subtotal: item.price * item.cantidad
        })),
        subtotal,
        envio,
        total,
        totalItems,
        status: "pendiente",
        createdAt: serverTimestamp()
    };

    await setDoc(orderRef, order);

    return orderRef.id;
};

const formatTimestamp = (timestamp) => {
    if (!timestamp?.toDate) {
        return "Sin fecha";
    }

    return timestamp.toDate().toLocaleString("es-MX", {
        dateStyle: "medium",
        timeStyle: "short"
    });
};

export const getOrders = async () => {
    const db = getFirebaseDb();
    const ordersQuery = query(collection(db, "ordenesCompra"), orderBy("createdAt", "desc"));
    const ordersSnapshot = await getDocs(ordersQuery);

    return ordersSnapshot.docs.map((orderDoc) => {
        const orderData = orderDoc.data();

        return {
            id: orderDoc.id,
            ...orderData,
            createdAtText: formatTimestamp(orderData.createdAt)
        };
    });
};
