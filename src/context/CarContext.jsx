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

    return (
        <CarContext.Provider value={{ car, setCar, addToCart }}>
            {children}
        </CarContext.Provider>
    );
};
