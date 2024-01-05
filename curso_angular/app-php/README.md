<h1 align="center"> Criando APIs com Angular </h1>

![XAMPP](https://a11ybadges.com/badge?logo=xampp) ![Node.js](https://a11ybadges.com/badge?logo=nodedotjs) ![Angular](https://a11ybadges.com/badge?logo=angular) ![Visual Studio Code](https://a11ybadges.com/badge?logo=visualstudiocode)

Curso pertencente a Trilha Java - [Programa START da Capgemini](https://startcapgemini.com.br/)

## Tecnologias Utilizadas

* **Front-end:** 
  - Angular 17.0.8 (HTML, CSS, TypeScript);
  - Node.js 21.4.0
* **Back-end:** 
  - XAMPP para Linux 8.2.4-0 (Apache, PHP, MySQL)
* **IDE:** 
  - Visual Studio Code 1.85.1

## Estrutura do Projeto 

**Banco de Dados:**

1. Iniciar o painel de controle do XAMPP

- se você usa um sistema de 32 bits:
```
sudo /opt/lampp/manager-linux.run
```
- se você usa um sistema de 64 bits:
```
sudo /opt/lampp/manager-linux-x64.run
```

- na aba `Manage Servers` clicar em `Start All` 

2. Acessar o aplicativo phpMyAdmin (para administração do MySQL)

```
https://localhost/phpmyadmin/
```

3. No phpMyAdmin, importar o database `api.sql` (localizado no diretório `/capgemini_school/curso_angular/app-php/database`)

**Servidor:**

- após efetuar o clone do projeto, copie a pasta `/api` dentro da pasta `/htdocs` (essa pasta está localizada no diretório onde foi salvo o XAMPP);

- dentro da pasta `/api/php` temos os seguintes arquivos:

`.htaccess`: remove a extensão ".php" de URLs no Apache e permite que os métodos POST, GET, OPTIONS, DELETE e PUT sejam usados em solicitações CORS;

`conexao.php`: conexão entre o código PHP e o banco de dados MySQL;

`listar.php`: script que retorna os dados da tabela "cursos" no formato JSON;

`cadastrar.php`: script que trata a inserção de dados de um novo curso no banco de dados;

`alterar.php`: script que trata a atualização de dados de um curso específico no banco de dados;

`excluir.php`: script que trata da exclusão de um curso específico na tabela "cursos" do  banco de dados.

- URLs:

`http://localhost/api/php/`: caminho para o ponto de entrada de um serviço web construído com PHP;

`http://localhost/api/php/listar`: caminho para a operação de listagem de dados;

`http://localhost/api/php/cadastrar`: caminho para a operação de inserção de dados;

`http://localhost/api/php/alterar`: caminho para a operação de atualização de dados;

`http://localhost/api/php/excluir`: caminho para a operação de exclusão de dados.

**Cliente:**

URL local onde a aplicação Angular está sendo executada: `http://localhost:4200` 

