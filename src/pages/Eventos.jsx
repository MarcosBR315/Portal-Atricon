import * as S from "../components/StyledComponents";
import { ButtonLink } from "../components/StyledComponents";

export default function Eventos() {
  return (
    <>
      <S.Header>Eventos Atricon</S.Header>
      <S.Main>
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
      </S.Main>
    </>
  );
}
