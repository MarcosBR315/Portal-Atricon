import * as S from "../components/StyledComponents";

export default function SiteOficial() {
  return (
    <>
      <S.Header>Portal Atricon</S.Header>
      <S.Main>
        <h2>Site Oficial Atricon</h2>
        <a
          href="https://atricon.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir para o site oficial
        </a>
        <S.ButtonLink to="/">Voltar</S.ButtonLink>
      </S.Main>
    </>
  );
}
