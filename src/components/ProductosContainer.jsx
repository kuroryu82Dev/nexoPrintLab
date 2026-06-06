//import CardComponent from "../shared/card";
import styles from "../css/ProductosContainer.module.css";
import PageHeader from "../shared/pageHeader";
import heroImage from "../assets/headerNexo.png";
import ProductosList from "./ProductosList";
import useProductoServiceApi from '../service/ProductoServiceApi';

const ProductosContainer = () => {
    const productos = useProductoServiceApi();
    return (
        <>
            <PageHeader titulo="Productos" subtitulo=" Explora nuestra línea de productos personalizados con la más alta calidad de impresión." imagen={heroImage}/>
            <div className={styles["productos-grid"]}>  
                <ProductosList productos={productos}/>   
            </div>
        </>
        
    );
};

export default ProductosContainer;
