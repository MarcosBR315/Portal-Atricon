import * as S from "../components/StyledComponents";
import LogoBrancaHorizontal from "../components/images/logoBrancaHorizontal.png";
import imgRdT from "../components/images/logoRdT.png";
import imgLabtcs from "../components/images/logoLabtcs.png";

export default function Projetos() {
  return (
    <>
      <S.Header>
        <img alt="Logo da Atricon Horizontal" className="logoHorizontal" src={LogoBrancaHorizontal} />
        <h1>Portal Atricon</h1>
      </S.Header>
      <S.Main>
        <div className="buttonsContainer">
          <S.A
            href="https://radardatransparencia.atricon.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Logo do Radar da Transparência" src={imgRdT} />
          </S.A>
          <S.A
            href="https://labtcs.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Logo do LabTCs" src={imgLabtcs} />
          </S.A>
          <S.ButtonLink to="/">Voltar</S.ButtonLink>
        </div>
      </S.Main>
    </>
  );
}
