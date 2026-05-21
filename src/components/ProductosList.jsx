
import CardComponent from '../shared/card';
import useProductoServiceApi from '../service/ProductoServiceApi';

const ProductosList = () => {

    const productos = useProductoServiceApi();

    return (

        productos.map((producto) => (
            <CardComponent 
                key={producto.id} 
                imagen={producto.image} 
                categoria="DTF" 
                titulo={producto.title}
                descripcion={producto.description}
                precio={producto.price}
                ranking={producto.rating.rate}
            />
        ))

    );

}

export default ProductosList;
