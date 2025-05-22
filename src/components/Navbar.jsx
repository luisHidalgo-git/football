import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">⚽</Link>
            <Link to="/resultados">📊</Link>
            <Link to="/info">ℹ️</Link>
            <Link to="/boletos">🎟️</Link>
        </nav>
    );
}

export default Navbar;