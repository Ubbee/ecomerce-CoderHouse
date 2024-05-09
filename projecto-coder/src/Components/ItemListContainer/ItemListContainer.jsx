import styles from './itemListContainer.module.css'
import { ItemList } from '../ItemList/ItemList'
import { useFetch, getProductsByCategory } from '../../Hooks/useFetch'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

export const ItemListContainer = () => {

    const url = "https://fakestoreapi.com/products";
    const method = "GET";


    const { data, loading, error } = useFetch(url, method, null);

   

    return (
        <div className={styles.container}>
            ${loading === true ? <Loading /> : <ItemList productsList={data} />}

        </div>
    )
}
