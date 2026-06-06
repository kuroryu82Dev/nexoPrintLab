import { useState } from "react";
import CardComponent from "../shared/card";
import ProductosModal from "./ProductosModal";

const ProductosList = ({ productos }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalmode, setModalMode] = useState("detail");

    //Manejo del cierre del modal
    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalMode("detail");
    };

    //Manejo de agregar al carrito
    const handleAddToCart = (producto) => {
        // Lógica para agregar el producto al carrito
        console.log(`Producto agregado al carrito: ${producto.title}`);
        handleCloseModal();
    }

    return (
        <>
            {productos.map((producto) => (
                <CardComponent
                    key={producto.id}
                    imagen={producto.image}
                    categoria="DTF"
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    ranking={producto.rating.rate}
                    onViewDetail={() => {
                        setSelectedProduct(producto)
                        setModalMode("detail")}}
                    onOpenCart={() => {
                        setModalMode("cart")
                        setSelectedProduct(producto)
                    }}
                />
            ))}

            {selectedProduct && (
                <ProductosModal
                    producto={selectedProduct}
                    onClose={handleCloseModal}
                    onAddToCart={handleAddToCart}
                    mode={modalmode}
                />
            )}
        </>
    );
};

export default ProductosList;
