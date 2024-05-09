import styles from './item.module.css';

export const Item = ({ id, name, description, price, image }) => {
    return (
        <div className={styles.item}>
            <img src={image} alt="" variant="top" />
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <button variant="primary">
                    Detalles
                </button>
            </div>
        </div>

    )
}
