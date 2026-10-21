import { useParams } from "react-router-dom";
import * as S from "../components/StyledComponents";
import { secoes } from "../data/secoes";
import NotFound from "./NotFound";

export default function LinksPage() {
  const { secao } = useParams();
  const links = Object.hasOwn(secoes, secao) ? secoes[secao] : null;

  if (!links) return <NotFound />;

  return (
    <S.Main>
      <div className="buttonsContainer">
        {links.map(({ href, img, alt }) => (
          <S.A key={href} href={href} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={alt} />
          </S.A>
        ))}
        <S.ButtonLink to="/">Voltar</S.ButtonLink>
      </div>
    </S.Main>
  );
}