import './itemListContainer.module.css'

const propiedad = {id: 1, text: "Hola! Bienvenido!"}

export const ItemListContainer = (props) => {

    const {mensaje} = props;

    return (
        <div >
            <p>{mensaje}</p>
        </div>
    )
}
