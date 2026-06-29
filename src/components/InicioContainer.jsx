import PageHeader from "../shared/pageHeader";
import Servicios from "../components/Servicios";
// import ProductosDestacados from "../components/ProductosDestacados";
//import Footer from "../shared/Footer";

import heroImage from "../assets/headerNexo.png";

const InicioContainer = () => {

    return (
        <>
            <PageHeader
                titulo="Dale vida a tus ideas"
                subtitulo="DTF • Sublimación • Vinil Textil • Bordado"
                imagen={heroImage}
            />

            <Servicios />
            {/* <ProductosDestacados />*/}

            
        </>
    );

};

export default InicioContainer;
