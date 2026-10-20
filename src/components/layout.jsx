import * as S from "../components/StyledComponents";
import LogoHorizontal from "../components/images/logoBrancaHorizontal.png";

export default function Header() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" alt="Logo da Atricon Horizontal" src={LogoHorizontal} />
        <h1>Portal Atricon</h1>
      </S.Header>
    </>
  );
}
