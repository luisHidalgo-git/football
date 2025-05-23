import { useState } from "react";
import { Link } from "react-router-dom";

function Info() {
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
        <span className="page-title">Cbtis #130</span>
        <button className="icon-button">🔔</button>
      </h1>
      {isMenuOpen && (
        <div className="menu active">
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            ✕
          </button>
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
      <div className="info-content">
        <div className="info-section">
          <img src="/src/images/ubicacion.png" alt="Ubicación" />
          <div className="info-text">
            <h2>Ubicación</h2>
            <p>
              Nos ubicamos en: Prol. Cuauhtémoc Huizache I, 34160 Durango, Dgo.
            </p>
          </div>
        </div>

        <div className="info-section">
          <img src="/src/images/contacto.png" alt="Contacto" />
          <div className="info-text">
            <h2>Contacto</h2>
            <p>Contacto: +526181820123</p>
            <p>Correo: administracion@cbtis130.edu.mx</p>
          </div>
        </div>

        <div className="info-section">
          <img src="/src/images/web.png" alt="Web" />
          <div className="info-text">
            <h2>Página web</h2>
            <p>Página web: http://cbtis130.edu.mx/</p>
          </div>
        </div>

        <div className="info-section">
          <img src="/src/images/facebook.png" alt="Social" />
          <div className="info-text">
            <h2>Redes sociales</h2>
            <p>
              Redes sociales: https://www.facebook.com/CBTis130/?locale=es_LA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
