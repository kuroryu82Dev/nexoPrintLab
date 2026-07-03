import { useContext, useState } from "react";
import CardComponent from "../shared/card";
import ProductosModal from "./ProductosModal";
import { CarContext } from "../context/CarContext";

const ProductosList = ({ productos }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalMode, setModalMode] = useState("detail");
    const { addToCart } = useContext(CarContext);

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalMode("detail");
    };

    const handleAddToCart = (producto, cantidad) => {
        addToCart(producto, cantidad);
        handleCloseModal();
    };

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
                    ranking={producto.rating?.rate || 0}
                    onViewDetail={() => {
                        setSelectedProduct(producto);
                        setModalMode("detail");
                    }}
                    onOpenCart={() => {
                        setSelectedProduct(producto);
                        setModalMode("cart");
                    }}
                />
            ))}

            {selectedProduct && (
                <ProductosModal
                    producto={selectedProduct}
                    onClose={handleCloseModal}
                    onAddToCart={handleAddToCart}
                    mode={modalMode}
                />
            )}
        </>
    );
};

export default ProductosList;
