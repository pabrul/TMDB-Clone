# TMDB Clone

TMDB Clone é uma aplicação web que replica a interface do The Movie Database (TMDB) para exibir uma listagem de filmes populares e tendências, permitindo aos usuários navegar entre os filmes e acessar detalhes individuais de cada um. Os dados dos filmes são consumidos diretamente da [API do TMDB](https://www.themoviedb.org/documentation/api).

## Objetivo

O projeto tem como objetivo demonstrar o entendimento de boas práticas de Engenharia de Software e o uso de tecnologias como **Vue.js**, **Axios**, **Vue Router**, e boas práticas de **Componentização**. A aplicação inclui funcionalidades como listagem de filmes, busca de filmes, exibição de detalhes individuais e navegação por meio de links clicáveis.

## Funcionalidades

- **Listagem de Filmes Populares e de Tendência**: Exibição dos filmes mais populares e filmes em tendência através de um layout semelhante ao TMDB.
- **Busca de Filmes**: Os usuários podem buscar filmes pelo nome, e os resultados são exibidos em forma de cards clicáveis.
- **Detalhes do Filme**: Ao clicar em um filme, o usuário é redirecionado para a página de detalhes, que exibe a capa do filme, sua descrição, avaliação, duração, e o elenco principal.
- **Navegação**: O cabeçalho da aplicação contém links clicáveis que levam o usuário de volta à página inicial e para outras seções da aplicação.

## Tecnologias Utilizadas

- **Vue.js 3**: Framework JavaScript para construção de interfaces de usuário.
- **Vue Router**: Biblioteca oficial de roteamento para Vue.js, permitindo navegação entre páginas.
- **Axios**: Cliente HTTP usado para fazer as requisições para a API do TMDB.
- **TMDB API**: A API do The Movie Database foi usada para obter dados de filmes, incluindo detalhes como elenco, sinopse e imagem.
- **Tailwind CSS**: Framework CSS utilitário para criação de estilos rápidos e responsivos.

## Estrutura do Projeto

```bash
src/
│
├── assets/                 # Arquivos estáticos, como imagens
├── components/
│   ├── atoms/              # Componentes menores e reutilizáveis, como botões e links
│   ├── molecules/          # Componentes compostos de vários átomos, como menus e cards
│   ├── organisms/          # Componentes maiores que compõem seções inteiras
│   └── layouts/            # Layouts para páginas da aplicação
├── composables/            # Composables do Vue (lógica reutilizável) para manipulação de dados
├── pages/                  # Páginas principais da aplicação (ex: Home, MovieDetails)
├── router/                 # Configurações de rotas
├── services/               # Serviços como chamadas à API
├── stores/                 # Gerenciamento de estado usando Vuex ou Pinia
├── utils/                  # Utilitários e funções auxiliares
└── styles/                 # Arquivos de estilo CSS
```

## Como Executar o Projeto

Clone o repositório:
git clone https://github.com/seu-usuario/tmdb-clone.git

Acesse a pasta do projeto:
cd tmdb-clone

Instale as dependências:
npm install

Crie um arquivo .env na raiz do projeto e adicione sua chave da API do TMDB:
VITE_TMDB_API_KEY=SUA_API_KEY

Execute o projeto:
npm run dev

Acesse o projeto no navegador:
exemplo:
http://localhost:3000
