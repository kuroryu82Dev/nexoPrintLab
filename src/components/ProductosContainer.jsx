//import CardComponent from "../shared/card";
import styles from "../css/ProductosContainer.module.css";
import PageHeader from "../shared/pageHeader";
import heroImage from "../assets/headerNexo.png";
import ProductosList from "./ProductosList";
import useProductoServiceApi from "../service/ProductoServiceApi";

const ProductosContainer = () => {
    const { productos, loading, error } = useProductoServiceApi();

    return (
        <>
            <PageHeader
                titulo="Productos"
                subtitulo=" Explora nuestra linea de productos personalizados con la mas alta calidad de impresion."
                imagen={heroImage}
            />
            <div className={styles["productos-grid"]}>
                {loading && <p className={styles["productos-message"]}>Cargando productos...</p>}
                {error && <p className={styles["productos-message"]}>{error}</p>}
                {!loading && !error && <ProductosList productos={productos} />}
            </div>
        </>
    );
};

export default ProductosContainer;
