import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="icon-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <div className="menu-items">
          <Link to="/" onClick={toggleMenu}>
            Horarios
          </Link>
          <Link to="/resultados" onClick={toggleMenu}>
            Resultados
          </Link>
          <Link to="/info" onClick={toggleMenu}>
            Información
          </Link>
          <Link to="/boletos" onClick={toggleMenu}>
            Boletos
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
