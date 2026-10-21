import imgENTC from "../components/images/logoENTC.png";
import imgCITC from "../components/images/logoCITC.png";
import imgCATC from "../components/images/logoCATC.png";
import imgRdT from "../components/images/logoRdT.png";
import imgLabtcs from "../components/images/logoLabtcs.png";
import logoReduzida from "../components/images/LogoReduzida.png";

export const secoes = {
  "site-oficial": [
    { href: "https://atricon.org.br/", img: logoReduzida, alt: "Site oficial da Atricon" },
  ],
  eventos: [
    { href: "https://entc.atricon.org.br/", img: imgENTC, alt: "Logo do X ENTC" },
    { href: "https://citc.atricon.org.br", img: imgCITC, alt: "Logo IV CITC" },
    { href: "https://catc.atricon.org.br", img: imgCATC, alt: "Logo IV CATC" },
  ],
  projetos: [
    { href: "https://radardatransparencia.atricon.org.br/", img: imgRdT, alt: "Logo do Radar da Transparência" },
    { href: "https://labtcs.com.br/", img: imgLabtcs, alt: "Logo do LabTCs" },
  ],
};