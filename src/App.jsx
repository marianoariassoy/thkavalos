import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomeContainer";
import Proyecto from "./pages/proyecto/ProyectoContainer";
import Unidades from "./pages/unidades/UnidadesContainer";
import Urquiza from "./pages/urquiza/UrquizaContainer";
import Contacto from "./pages/contacto/ContactoContainer";
import Error from "./pages/error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/villa-urquiza" element={<Urquiza />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
