/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [car, setCar] = useState([]);

    const addToCart = (producto, cantidad = 1) => {
        setCar((prevCar) => {
            const existingProduct = prevCar.find((item) => item.id === producto.id);

            if (existingProduct) {
                return prevCar.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                );
            }

            return [...prevCar, { ...producto, cantidad }];
        });
    };

    const updateCartQuantity = (productId, nextCantidad) => {
        setCar((prevCar) =>
            prevCar
                .map((item) =>
                    item.id === productId
                        ? { ...item, cantidad: Math.max(1, nextCantidad) }
                        : item
                )
                .filter((item) => item.cantidad > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCar((prevCar) => prevCar.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCar([]);
    };

    return (
        <CarContext.Provider value={{ car, setCar, addToCart, updateCartQuantity, removeFromCart, clearCart }}>
            {children}
        </CarContext.Provider>
    );
};
