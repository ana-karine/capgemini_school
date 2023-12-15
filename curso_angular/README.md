<h1 align="center"> Curso Angular </h1>

![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)    

Curso pertencente a Trilha Java - [Programa START da Capgemini](https://startcapgemini.com.br/)

## Tecnologias Utilizadas

* Ubuntu 22.04.3 LTS
* Visual Studio Code 1.85.0
* Angular CLI: 17.0.6
* Node: 18.19.0
* Package Manager: npm 10.2.3
* Angular: 17.0.6
* TypeScript 5.2.2

## Comandos 

### Projeto

- criar projeto
```
ng new <nome-projeto> --no-standalone
```

- executar projeto (dentro da pasta do projeto)
```
npm start
```

- visualizar projeto <br>
Clicar no local onde o projeto está sendo executado (ex.: http://localhost:4200/)

- encerrar execução do projeto <br>
Você pode parar a execução da aplicação no terminal com o atalho "Ctrl + C"

**Roteamento**

- adicionar a biblioteca `router`
```
npm i @angular/router
```

- criar módulo responsável pelo roteamento
```
ng generate module <nome-modulo> --flat --module=app.module
```

- criar módulo com 'lazy loading'
```
ng generate module <nome-modulo> --route=<nome-da-rota> --module=app.module
```

**Corrigindo problemas**

- Caso apareça o erro abaixo siga o passo 1 e torne a executar o projeto
```
Port 4200 is already in use. Use '--port' to specify a different port.
```

Passo 1: 
```
sudo kill $(sudo lsof -t -i:4200)
```

### Componente

- criar componente
```
ng generate component <nome-componente>
```

- mostrar componente na tela <br>
Incluir no arquivo `app.component.html` o nome do componente entre tags html
```
<app-nome-componente></app-nome-componente>
```

### Pipe

- criar pipe
```
ng generate pipe <nome-pipe>
```

### Serviço

- criar serviço
```
ng generate service <nome-servico>
```

### Autenticação

- criar guard
```
ng generate guard <nome-guard>
```