import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Horarios from "./pages/Horarios";
import Resultados from "./pages/Resultados";
import Info from "./pages/Info";
import Boletos from "./pages/Boletos";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Horarios />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/info" element={<Info />} />
            <Route path="/boletos" element={<Boletos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
