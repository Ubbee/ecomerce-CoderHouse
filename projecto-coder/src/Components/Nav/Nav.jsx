import styles from '../Nav/nav.module.css';
import { CartWidget } from '../CartWidget/CartWidget.jsx'

export const Nav = () => {
    return (
        <header>
            <nav className={styles.background}>
                <a href=""><img src="./src/Components/Nav/img/logo.jpg" alt="iconoCarrito" /></a>
                <ul>
                    <li><a href="">Categoria 1<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></a></li>
                    <li><a href="">Categoria 2<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></a></li>
                    <li><a href="">Categoria 3<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="currentColor" d="M4.5 15L12 7.5L19.5 15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg></a></li>
                </ul>
                <CartWidget />
            </nav>
        </header>


    )
}
