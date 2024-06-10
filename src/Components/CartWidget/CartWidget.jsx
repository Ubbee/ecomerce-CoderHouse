import '../CartWidget/cartWidget.module.css'
import { useCartContext } from '../../context/CartContext.jsx'
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const { totalQty } = useCartContext();

    return (
        <div>
            <Link to="/cart">🛒</Link>
            <p>{totalQty}</p>
        </div>
    );
};
