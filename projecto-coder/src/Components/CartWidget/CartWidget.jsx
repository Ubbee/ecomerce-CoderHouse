import '../CartWidget/cartWidget.module.css'
import { useCartContext } from '../../context/CartContext.jsx'
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const { totalQty } = useCartContext();

    return (
        <div>
            <Link to="/cart"><img src="./img/carritoCompras.png" alt="icono carrito" /></Link>
            <a href=""></a>
            <p>{totalQty}</p>
        </div>
    );
};
