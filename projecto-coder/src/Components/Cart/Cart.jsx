import { useCartContext } from "../../context/CartContext"
import Table from 'react-bootstrap/Table';
import styles from "./cart.module.css"

export const Cart = () => {

  const { cart, totalPrice, removeItem, clearCart } = useCartContext();
  console.log(cart)


  const handlleRemoveItem = (id, price, sum) =>{
    removeItem(id, price, sum);
  }

  const HandlleClearCart = () =>{
    clearCart();
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
    <div>
      <button onClick={HandlleClearCart}>Limpiar Carro</button>
    <p>Total: $<span>{totalPrice}</span></p>
    </div>
  </>

}
