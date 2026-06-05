/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

// Crear el contexto para el carrito de compras
export const CarContext = createContext();

// Crear un proveedor para el contexto del carrito de compras
export const CarProvider = ({ children }) => {

    const [car, setCar] = useState([]);

    // Función para agregar un producto al carrito

    return (
        <CarContext.Provider value={{ car, setCar }}>
            {children}
        </CarContext.Provider>
    )
}