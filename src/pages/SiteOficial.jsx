import * as S from "../components/StyledComponents";
import LogoSimples from "../components/images/logoBrancaHorizontal.png";

export default function SiteOficial() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" src={LogoSimples} />
        <h1>Portal Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <S.A
            href="https://atricon.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoHorizontal}/>
            <p>Ir para o site oficial</p>
          </S.A>
          <S.ButtonLink to="/">Voltar</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}
