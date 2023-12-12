<h1 align="center"> Curso Angular </h1>

![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)    

Curso pertencente a Trilha Java - [Programa START da Capgemini](https://startcapgemini.com.br/)

## Tecnologias Utilizadas

* Ubuntu 22.04.3 LTS
* Visual Studio Code 1.85.0
* Node.js 12.22.9
* NPM 8.5.1
* Angular CLI 6.0.7

## Comandos 

- criar projeto
```
ng new <nome_projeto>
```

- executar projeto (dentro da pasta do projeto)
```
npm start
```

- visualizar projeto 
Clicar no local onde o projeto está sendo executado (ex.: http://localhost:4200/)

- encerrar execução do projeto
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

Passo 1: vá para `package.json` e modifique "rxjs": "^6.0.0" para "rxjs": "6.0.0"
Passo 2: Executar `npm install` dentro da pasta do projeto

- Caso apareça o erro abaixo siga o passo 3 e torne a executar o projeto
```
Port 4200 is already in use. Use '--port' to specify a different port.
```

Passo 3: 
```
sudo kill $(sudo lsof -t -i:4200)
```

