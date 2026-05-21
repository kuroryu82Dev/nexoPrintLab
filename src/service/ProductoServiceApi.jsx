import { useEffect, useState } from "react";

const useProductoServiceApi = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const productosRopa = data.filter((producto) =>
          producto.category.toLowerCase().includes("clothing")
        );
        setProductos(productosRopa);
      })
      .catch((error) => console.error("Error fetching productos:", error));
  }, []);

  return productos;
};

export default useProductoServiceApi;
