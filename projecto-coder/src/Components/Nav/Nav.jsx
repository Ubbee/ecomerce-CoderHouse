import styles from '../Nav/nav.module.css';

export const Nav = () => {
    return (
        <header>
            <nav className={styles.background}>
                <h1>Titulo</h1>
                <ul>
                    <li><a href="">Categoria 1</a></li>
                    <li><a href="">Categoria 2</a></li>
                    <li><a href="">Categoria 3</a></li>
                </ul>

                <a href=""><img src="./src/Components/Nav/img/carritoCompras.png" alt="" /></a>
            </nav>
        </header>
    )
}
