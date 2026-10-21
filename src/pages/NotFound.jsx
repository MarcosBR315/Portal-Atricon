import * as S from "../components/StyledComponents";

export default function NotFound() {
  return (
    <S.Main>
      <h2>Página não encontrada</h2>
      <S.ButtonLink to="/">Voltar ao início</S.ButtonLink>
    </S.Main>
  );
}