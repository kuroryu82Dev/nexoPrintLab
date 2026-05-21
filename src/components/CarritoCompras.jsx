import styles from "../css/CarritoCompras.module.css";
import { ShoppingCart, User } from "lucide-react";

const CarritoCompras = () => {
    return (
        <div className={styles['nexo-icons']}>
            <button className={styles['cart-btn']}>
            <ShoppingCart size={21} />
            <span>2</span>
            </button>

            <button className={styles['user-btn']}>
                <User size={21} />
            </button>
            
        </div>
    );
};

export default CarritoCompras;
