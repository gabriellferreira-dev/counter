<div align="center" id="top">
  <img src="./.github/app.gif" alt="Counter React" />

  &#xa0;

  <!-- <a href="https://counterreact.netlify.com">Demo</a> -->
</div>

<h1 align="center">Counter React</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/gabriellferreira-dev/counter-react?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/gabriellferreira-dev/counter-react?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/gabriellferreira-dev/counter-react?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/gabriellferreira-dev/counter-react?color=56BEB8">

</p>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-pré-requisitos">Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="#como_usar">Como usar o botão</a> &#xa0; | &#xa0;
  <a href="https://github.com/gabriellferreira-dev" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

Esse é um projeto simples, realizado como teste para uma vaga de front-end, onde deveria criar um componente (Botão) que seria utilizado outras vezes. Para demonstrar seu uso, criei um simples contador.


## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

## :white_check_mark: Pré requisitos ##

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados em sua maquina.

## :checkered_flag: Começando ##

```bash
# Clone este repositório
$ git clone https://github.com/gabriellferreira-dev/counter-react

# Entre na pasta
$ cd counter-react

# Instale as dependências
$ yarn

# Para iniciar o projeto
$ yarn start

# O app vai inicializar em <http://localhost:3000>
```

## :como_usar: Como usar o componente ##

1º - Deve importar do diretório "/components/Button" o botão;
2º - Inserir no código.
```
  <div>
    <Button>Adicionar</Button>
  </div>
```
3º - Passar as configurações do botão.
* **color** - primary | secondary
* **icon** - arrow-right | check | refresh
* Dentre outras opções que recebe o botão.

```
  <div color="primary">
    <Button>Adicionar</Button>
  </div>

  <div color="secondary" icon="check">
    <Button>Adicionar</Button>
  </div>
```


Feito com :heart: por <a href="https://github.com/gabriellferreira-dev" target="_blank">Gabriel Ferreira</a>

&#xa0;

<a href="#top">Voltar para o topo</a>
