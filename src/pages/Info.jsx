function Info() {
    return (
        <div className="page-container">
            <h1>Cbtis #130</h1>
            <div className="info-content">
                <div className="location-section">
                    <h2>Ubicación</h2>
                    <img
                        src="/map.png"
                        alt="Ubicación"
                    />
                    <p>Prol. Cuauhtémoc, Huizache I, 34160 Durango, Dgo.</p>
                </div>

                <div className="contact-section">
                    <h2>Contacto</h2>
                    <p>+526181820023</p>
                    <p>administracion@cbtis130.edu.mx</p>
                </div>

                <div className="web-section">
                    <h2>Página web</h2>
                    <a
                        href="http://cbtis130.edu.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        http://cbtis130.edu.mx/
                    </a>
                </div>

                <div className="social-section">
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
    );
}

export default Info;
