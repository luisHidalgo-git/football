import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Horarios</Link>
            <Link to="/resultados">Resultados</Link>
            <Link to="/info">Info</Link>
            <Link to="/boletos">Boletos</Link>
        </nav>
    );
}

export default Navbar;
