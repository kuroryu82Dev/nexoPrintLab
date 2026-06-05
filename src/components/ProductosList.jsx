import { useState } from "react";
import CardComponent from "../shared/card";
import ProductosModal from "./ProductosModal";

const ProductosList = ({ productos }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

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
                    onViewDetail={() => setSelectedProduct(producto)}
                />
            ))}

            {selectedProduct && (
                <ProductosModal
                    producto={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
};

export default ProductosList;
