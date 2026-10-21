import { Outlet } from "react-router-dom";
import * as S from "./StyledComponents";
import logo from "./images/logoBrancaHorizontal.png";

export default function Layout() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" src={logo} alt="Atricon" />
        <h1>Portal Atricon</h1>
      </S.Header>
      <Outlet />
      <S.Footer>© {new Date().getFullYear()} Atricon</S.Footer>
    </>
  );
}