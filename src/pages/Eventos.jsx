import * as S from "../components/StyledComponents";
import LogoBrancaHorizontal from "../components/images/logoBrancaHorizontal.png";
import imgCATC from "../components/images/logoCATC.png";
import imgCITC from "../components/images/logoCITC.png";

export default function Eventos() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" src={LogoBrancaHorizontal} />
        <h1>Portal Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <S.A
            href="https://citc.atricon.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgCITC} />
          </S.A>
          <S.A
            href="https://catc.atricon.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgCATC} />
          </S.A>
          <S.ButtonLink to="/">Voltar</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}
