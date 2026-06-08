import { useContext } from "react";
import styles from "../css/CarritoCompras.module.css";
import { ShoppingCart, User } from "lucide-react";
import { CarContext } from "../context/CarContext";
import { useNavigate } from "react-router-dom";

const CarritoCompras = () => {
    const { car } = useContext(CarContext);
    const totalItems = car.reduce((total, item) => total + item.cantidad, 0);
    const navigate = useNavigate();

    return (
        <div className={styles['nexo-icons']}>
            <button className={styles['cart-btn']} onClick={() => navigate("/carrito")}>
            <ShoppingCart size={21} />
            <span>{totalItems}</span>
            </button>

            <button className={styles['user-btn']}>
                <User size={21} />
            </button>
            
        </div>
    );
};

export default CarritoCompras;
