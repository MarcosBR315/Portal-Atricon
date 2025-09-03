import * as S from "../components/StyledComponents";

export default function Home() {
  return (
    <>
      <S.Header>Portal Atricon</S.Header>
      <div>
        <S.Main>
          <S.ButtonLink to="/site-oficial">Site Oficial</S.ButtonLink>
          <S.ButtonLink to="/projetos">Projetos</S.ButtonLink>
          <S.ButtonLink to="/eventos">Eventos</S.ButtonLink>
        </S.Main>
      </div>
    </>
  );
}
