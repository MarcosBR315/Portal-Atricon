# Portal Atricon

Portal que reúne, em um só lugar, o **site oficial**, os **eventos** e os **projetos** da Associação dos Membros dos Tribunais de Contas do Brasil (Atricon), para facilitar a navegação no dia a dia.

> Desenvolvido como projeto final do curso de Análise e Desenvolvimento de
> Sistemas (UCB), com ciência da Atricon. As marcas e logos pertencem à Atricon.
> O portal não é uma ferramenta oficial da instituição.

🔗 **Demo:** https://portal-atricon.vercel.app

![Tela inicial do Portal Atricon](/public/telaInicial.png)

## Tecnologias

- React 19
- Vite
- React Router
- styled-components
- Deploy na Vercel

## Como rodar localmente

```bash
git clone https://github.com/MarcosBR315/Portal-Atricon.git
cd Portal-Atricon
npm install
npm run dev
```

Outros comandos:

```bash
npm run build   # gera a versão de produção
npm run lint    # verifica o código com ESLint
```

## Estrutura

```
src/
├── components/   # Layout, Header e estilos compartilhados
├── data/         # secoes.js: links de cada seção
└── pages/        # Home, LinksPage e NotFound
```

## Decisões técnicas

- **Layout único** com `<Outlet />` do React Router: o cabeçalho é escrito uma vez só.
- **Página de links orientada a dados:** Eventos, Projetos e Site Oficial usam o mesmo componente, alimentado por `src/data/secoes.js`. Para adicionar um link, basta editar o arquivo de dados.
- **Rota 404** para endereços inexistentes.
- **URLs limpas** com `BrowserRouter` e rewrite configurado no `vercel.json`.
- **Acessibilidade:** texto alternativo nas imagens e `lang="pt-BR"`.

## Melhorias futuras

- Testes com Vitest e React Testing Library
- CI com GitHub Actions (lint e build)
- Otimização das imagens (WebP)