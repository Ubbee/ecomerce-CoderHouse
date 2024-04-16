import './itemListContainer.module.css'


export const ItemListContainer = (props) => {

    const {mensaje} = props;

    return (
        <div >
            <p>{mensaje}</p>
        </div>
    )
}
