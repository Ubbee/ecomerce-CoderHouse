import styles from './itemDetail.module.css';
import { Link, NavLink } from 'react-router-dom'
import { Error } from '../Error/Error';

export const ItemDetail = ({ producto }) => {
    
    

    return (
        <>
            <div className={styles.item}>
                <img src={producto.image} alt="" variant="top" />
                <div>
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                    <p>{producto.price}</p>
                    <Link >
                        Añadir al Carro
                    </Link>
                </div>
            </div>
        </>
    )
}
