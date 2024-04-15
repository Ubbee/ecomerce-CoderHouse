import './ItemCount.module.css'
import { useState } from 'react'


export const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const handlleAdd = () =>{
        setContador(contador + 1);
    }
    const handlleSub = () => {
        if(contador>0) setContador(contador - 1);  
    }


  return (
    <>
    <div>ItemCount</div>
    <button onClick={handlleAdd}>+</button>
    <span> {contador} </span>
    <button onClick={handlleSub}>-</button>
    </>
  )
}

