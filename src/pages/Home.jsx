import * as S from "../components/StyledComponents";
import LogoHorizontal from "../components/images/logoBrancaHorizontal.png";

export default function Home() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" src={LogoHorizontal} />
        <h1>Portal Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <S.ButtonLink to="/site-oficial">Site Oficial</S.ButtonLink>
          <S.ButtonLink to="/projetos">Projetos</S.ButtonLink>
          <S.ButtonLink to="/eventos">Eventos</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}
