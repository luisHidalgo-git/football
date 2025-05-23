import { useState } from "react";
import { Link } from "react-router-dom";

function Boletos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const availableSeats = [
    { section: "233", row: "9", type: "Verified VIP Ticket" },
    { section: "348", row: "16", type: "Verified VIP Ticket" },
    { section: "118", row: "3", type: "Verified VIP Ticket" },
    { section: "319", row: "6", type: "Verified VIP Ticket" },
    { section: "101", row: "5", type: "Verified VIP Ticket" },
    { section: "149", row: "11", type: "Verified VIP Ticket" },
  ];

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
      <div className="seats-grid">
        {availableSeats.map((seat, index) => (
          <div key={index} className="seat-card">
            <div className="seat-info">
              <div className="seat-section">
                <span>
                  Sec {seat.section} • Row {seat.row}
                </span>
                <span className="seat-type">{seat.type}</span>
              </div>
              <button className="reserve-button">Reservar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boletos;
