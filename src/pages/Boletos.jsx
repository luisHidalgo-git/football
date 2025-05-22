function Boletos() {
  return (
    <div className="page-container">
      <h1>
        <button className="icon-button">☰</button>
        <span className="page-title">Asientos Disponibles</span>
        <button className="icon-button">🔔</button>
      </h1>
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
