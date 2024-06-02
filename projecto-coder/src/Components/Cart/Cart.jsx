import { useCartContext } from "../../context/CartContext"
import Table from 'react-bootstrap/Table';
import styles from "./cart.module.css"
import { useState } from "react";
import { db } from '../../firebase/dbConnection'
import { addDoc, collection } from "firebase/firestore";

export const Cart = () => {

  const [formData, SetFormData] = useState({nombre:"", cel:"", mail:"" });

  const { cart, totalPrice, removeItem, clearCart } = useCartContext();

  const handlleRemoveItem = (id, price, sum) => {
    removeItem(id, price, sum);
  }

  const HandlleClearCart = () => {
    clearCart();
  }

  const handleSaveCart = ()=>{
    console.log(formData)

    const ordersCollection = collection(db, "orders")

    const newOrder = {
      comprador: formData,
      items: cart,
      date: new Date(),
      total: totalPrice,
    }

    addDoc(ordersCollection, newOrder)
    .then((res)=> console.log(res))
    .catch((error) => console.log(error));

  }

  const handleOnChange = (e) =>{
    SetFormData({...formData, [e.target.name]: e.target.value});
  }



  return <>
    <Table striped bordered hover className={styles.tabla}>
      <thead >
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Cantidad</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {cart?.map(({ id, title, price, sum }, index) => {
          return (
            <tr key={index}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{sum}</td>
              <td><button onClick={() => handlleRemoveItem(id, price, sum)}>Eliminar</button></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    <div className={styles.divCart}>
      <button onClick={HandlleClearCart} >Limpiar Carro</button>
      <p>Total: $<span>{totalPrice}</span></p>
    </div>
    <div className={styles.finalizarC}>
      <div className={styles.inputs}>
        <div>
          <p>Nombre</p>
          <input type="text" name="nombre" id="nombre" 
          placeholder="Ingresá tu nombre" onChange={(e)=> handleOnChange(e)}/></div>
        <div>
          <p>Numero Celular</p>
          <input type="number" name="cel" id="cel" 
          placeholder="Ingresá tu celular" onChange={(e)=> handleOnChange(e)}/></div>
        <div>
          <p>Email</p>
          <input type="text" name="mail" id="mail" 
          placeholder="Ingresá tu E-mail" onChange={(e)=> handleOnChange(e)}/></div>
      </div>
      <div className={styles.botonFinalizar}>
        <button onClick={handleSaveCart}> Finalizar Compra </button>
      </div>
    </div>
  </>

}
