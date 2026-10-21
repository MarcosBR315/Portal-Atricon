import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LinksPage from "./pages/LinksPage";
import NotFound from "./pages/NotFound";
import * as S from "./components/StyledComponents";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:secao" element={<LinksPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;