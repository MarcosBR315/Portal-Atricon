import * as S from "../components/StyledComponents";

export default function Home() {
  return (
    <S.Main>
      <div className="buttonsContainer">
        <S.ButtonLink to="/site-oficial">Site Oficial</S.ButtonLink>
        <S.ButtonLink to="/eventos">Eventos</S.ButtonLink>
        <S.ButtonLink to="/projetos">Projetos</S.ButtonLink>
      </div>
    </S.Main>
  );
}