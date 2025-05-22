function Info() {
    return (
        <div className="page-container">
            <h1>Cbtis #130</h1>
            <div className="info-content">
                <div className="info-section">
                    <img
                        src="/src/images/ubicacion.png"
                        alt="Ubicación"
                    />
                    <div className="info-text">
                        <h2>Ubicación</h2>
                        <p>Prol. Cuauhtémoc, Huizache I, 34160 Durango, Dgo.</p>
                    </div>
                </div>

                <div className="info-section">
                    <img
                        src="/src/images/contacto.png"
                        alt="Contacto"
                    />
                    <div className="info-text">
                        <h2>Contacto</h2>
                        <p>+526181820023</p>
                        <p>administracion@cbtis130.edu.mx</p>
                    </div>
                </div>

                <div className="info-section">
                    <img
                        src="/src/images/web.png"
                        alt="Web"
                    />
                    <div className="info-text">
                        <h2>Página web</h2>
                        <a
                            href="http://cbtis130.edu.mx/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://cbtis130.edu.mx/
                        </a>
                    </div>
                </div>

                <div className="info-section">
                    <img
                        src="/src/images/facebook.png"
                        alt="Social"
                    />
                    <div className="info-text">
                        <h2>Redes sociales</h2>
                        <a
                            href="https://www.facebook.com/cbtis130/haceres_LA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
