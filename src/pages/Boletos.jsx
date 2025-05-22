function Boletos() {
    return (
        <div className="page-container">
            <h1>
                Asientos Disponibles
                <span>🔔</span>
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