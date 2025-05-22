import { useState } from "react";
import { Link } from "react-router-dom";

function Boletos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page-container">
      <h1>
        <button
          className="icon-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <span className="page-title">Asientos Disponibles</span>
        <button className="icon-button">🔔</button>
      </h1>
      {isMenuOpen && (
        <div className="menu active">
          <div className="menu-items">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Horarios
            </Link>
            <Link to="/resultados" onClick={() => setIsMenuOpen(false)}>
              Resultados
            </Link>
            <Link to="/info" onClick={() => setIsMenuOpen(false)}>
              Información
            </Link>
            <Link to="/boletos" onClick={() => setIsMenuOpen(false)}>
              Boletos
            </Link>
          </div>
        </div>
      )}
      <div className="stadium-map">
        <img
          src="/src/images/estadio.png"
          alt="Mapa del estadio"
          className="stadium-image"
        />
      </div>
    </div>
  );
}

export default Boletos;
