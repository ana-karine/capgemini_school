<h1 align="center"> Curso Angular </h1>

![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)    

Curso pertencente a Trilha Java - [Programa START da Capgemini](https://startcapgemini.com.br/)

## Tecnologias Utilizadas

* Ubuntu 22.04.3 LTS
* Visual Studio Code 1.85.0
* Node: 18.19.0
* Package Manager: npm 10.2.3
* Angular CLI: 17.0.6
* Angular: 8.2.14

## Comandos 

### Projeto

- criar projeto
```
ng new <nome-projeto>
```

- executar projeto (dentro da pasta do projeto)
```
npm start
```

- visualizar projeto <br>
Clicar no local onde o projeto está sendo executado (ex.: http://localhost:4200/)

- encerrar execução do projeto <br>
Você pode parar a execução da aplicação no terminal com o atalho "Ctrl + C"


**Corrigindo problemas**

- Caso apareça o erro abaixo siga os passos 1 e 2 e torne a executar o projeto
```
ERROR in node_modules/rxjs/internal/types.d.ts(90,44): error TS1005: ';' expected.
node_modules/rxjs/internal/types.d.ts(90,74): error TS1005: ';' expected.
node_modules/rxjs/internal/types.d.ts(90,77): error TS1109: Expression expected.
node_modules/rxjs/internal/types.d.ts(91,52): error TS1005: ';' expected.
node_modules/rxjs/internal/types.d.ts(91,88): error TS1005: ';' expected.
node_modules/rxjs/internal/types.d.ts(91,92): error TS1109: Expression expected.
```

Passo 1: vá para `package.json` e modifique "rxjs": "^6.0.0" para "rxjs": "6.0.0" <br>
Passo 2: Executar `npm install` dentro da pasta do projeto

- Caso apareça o erro abaixo siga o passo 3 e torne a executar o projeto
```
Port 4200 is already in use. Use '--port' to specify a different port.
```

Passo 3: 
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
ng generate pipe <NomePipe>
```

https://2264091154-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LAFAFKEinJy_kTY14OC%2F-M2Ek3pEu7Nhldg0XSl3%2F-M2Ek6cK8N_T8l6i1AKC%2Fcomponent_angular2.png?generation=1584033476043829&alt=media