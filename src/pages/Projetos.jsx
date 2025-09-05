import * as S from "../components/StyledComponents";
import LogoHorizontal from "../components/images/logoBrancaHorizontal.png";

export default function Projetos() {
  return (
    <>
      <S.Header>
        <img className="logoHorizontal" src={LogoHorizontal} />
        <h1>Projetos Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <a
            href="https://radardatransparencia.atricon.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radar da Transparência
          </a>
          <S.ButtonLink to="/">Voltar</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}