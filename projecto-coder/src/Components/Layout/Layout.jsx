import { Nav } from './Nav/Nav.jsx'
import { Footer } from './Footer/Footer.jsx'

export const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <div>
                { children }
            </div>
            <Footer />
        </div>
    )
}
