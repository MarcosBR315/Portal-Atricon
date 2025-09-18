import * as S from "../components/StyledComponents";
import LogoBrancaHorizontal from "../components/images/logoBrancaHorizontal.png";
import LogoReduzida from "../components/images/LogoReduzida.png";

export default function SiteOficial() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" src={LogoBrancaHorizontal} />
        <h1>Portal Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <S.A
            href="https://atricon.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoReduzida}/>
          </S.A>
          <S.ButtonLink to="/">Voltar</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}
