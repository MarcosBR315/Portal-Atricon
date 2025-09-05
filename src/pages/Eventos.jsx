import * as S from "../components/StyledComponents";
import LogoHorizontal from "../components/images/logoBrancaHorizontal.png";

export default function Eventos() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" src={LogoHorizontal} />
        <h1>Eventos Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <a
            href="https://catc.atricon.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            IV CATC
          </a>
          <a
            href="https://citc.atricon.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            IV CITC
          </a>
          <S.ButtonLink to="/">Voltar</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}