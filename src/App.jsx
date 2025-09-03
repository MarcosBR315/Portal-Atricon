import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SiteOficial from "./pages/SiteOficial";
import Projetos from "./pages/Projetos";
import Eventos from "./pages/Eventos";
import * as S from "./components/StyledComponents";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/site-oficial" element={<SiteOficial />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </>
  );
}

export default App;
