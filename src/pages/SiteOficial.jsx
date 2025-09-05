import * as S from "../components/StyledComponents";

export default function SiteOficial() {
  return (
    <>
      <S.Header>
        <h1>Portal Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <a
            href="https://atricon.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir para o site oficial
          </a>
          <S.ButtonLink to="/">Voltar</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}
