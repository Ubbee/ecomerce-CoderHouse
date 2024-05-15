import styles from './item.module.css';
import { Link, NavLink } from 'react-router-dom'

export const Item = ({ id, name, description, price, image }) => {

    return (
        <div className={styles.item}>
            <img src={image} alt="" variant="top" />
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <Link to={`/products/${id}`} >
                    Ver Mas!
                </Link>
            </div>
        </div>
    )
}

const pancho = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "category": "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 }

}