import styles from './itemDetailContainer.module.css'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import { Loading } from '../Loading/Loading'



export const ItemDetailContainer = () => {

    const { ProductId } = useParams()

    const url = ProductId ? `https://fakestoreapi.com/products/${ProductId}` : "https://fakestoreapi.com/error";
    const method = "GET";

    const { data, loading, error } = useFetch(url, method, null);

    return (
        <div className={styles.container}>
           ${loading === true ?  <Loading /> : <ItemDetail producto={data} />}
        </div>
        

    )
}

