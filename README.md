# md-links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Instalação](#2-instalação)
* [3. Utilização](#3-utilização)
* [4. Considerações técnicas](#4-considerações-técnicas)
* [5. Autora](#5-autora)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc), como por exemplo esse `README`.

Os arquivos `Markdown` são facilmente identificados por sua extensão `.md` e, normalmente, contém _links_ que podem estar
quebrados, ou que já não são válidos, trazendo problemas ao leitor desse arquivo.

Pensando nesse problema essa biblioteca foi criada utilizando [Node.js](https://nodejs.org/). Com ela é possível ler e analisar os arquivos no formato `Markdown`, para verificar os arquivos que contenham links e mostrar algumas estatísticas. Também é possível passar um diretório que contenha um arquivo no formato `Markdown` que o resultado será o mesmo.
Para facilitar sua utilização, tudo é feito via [CLI](https://www.w3schools.com/whatis/whatis_cli.asp) (_Command Line Interface_).


## 2. Instalação

Para instalar a biblioteca nas dependências do seu projeto, rode o seguinte comando em seu terminal:

```sh
npm i narodrigues/SAP004-md-links
``` 

Esse comando já garante que esteja tudo pronto para utilizar suas funcionalidades. Fica a critério do usuário utilizar algum argumento como `--global` ou `--save-dev` juntamente com o comando acima.

Se por acaso quiser excluir essa biblioteca do seu projeto, rode o seguinte comando:

```sh
npm uninstall md-links
``` 

**OBS:** Caso o usuário tenha optado por utilizar o argumento `--global` e queira desinstalar a biblioteca da sua máquina, não apenas do seu projeto, passe esse argumento junto do comando anterior. O comando final a ser executado seria:

```sh
npm uninstall md-links --global
``` 

## 3. Utilização

Para utilizar a biblioteca basta digitar o comando:

```sh
md-links <arquivo.md ou diretório desejado>
``` 

É importante ressaltar que quando o usuário passar um diretório, a biblioteca identificará o primeiro arquivo `Markdown`, quando este existir, e devolverá os links encontrados dentro desse arquivo apenas, portanto, se dentro do mesmo diretório existir mais de um arquivo `Markdown` que o usuário gostaria de verificar se contém links, o usuário deve passar o nome dos outros arquivos, ou mesmo o nome da pasta no qual ele se encontra seguido pelo nome do arquivo. Ex:

```sh
md-links diretório/nome_do_arquivo.md
``` 

É possível passar alguns argumentos junto ao comando md-links. Vejamos quais são:

* `--validate` para realizar uma verificação dos links encontrados e retornar o status de cada, dessa forma sendo possível identificar quais links estão funcionando e quais estão quebrados
* `--stats` para retornar algumas estatísticas sobre os links. Esse comando retornará o número total de links e quantos desses links são links únicos, ou seja, não se repetem

Por último, também é possível passar os dois argumentos juntos. Dessa forma ele terá um retorno semelhante ao quando passado o argumento `--stats`, mas além de retornar o número total de links e quantos são únicos, ele também retornará um campo informando quantos links quebrados existem.


## 4. Considerações técnicas

Para o desenvolvimento desse projeto foram utilizados:

* [Node.js](https://nodejs.org/en/) - v.12.18.2
* [Node-Fetch](https://www.npmjs.com/package/node-fetch) - v.2.6.0
* [Chalk](https://www.npmjs.com/package/chalk) - v.4.1.0


## 5. Autora

**Natasha Costa** - natasha.gr.costa@gmail.com
