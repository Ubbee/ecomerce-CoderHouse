import styles from './itemListContainer.module.css'
import { ItemList } from '../ItemList/ItemList'
import { useFetch } from '../../Hooks/useFetch'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const { categoryId } = useParams();

    const url = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : "https://fakestoreapi.com/products";
    const method = "GET";


    const { data, loading, error } = useFetch(url, method, null);

    return (
        <div className={styles.container}>
            ${loading === true ? <Loading /> : <ItemList productsList={data} />}
        </div>
    )
}
