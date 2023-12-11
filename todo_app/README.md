<h1 align="center"> ToDo App </h1>

![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white) ![NetBeans IDE](https://img.shields.io/badge/NetBeansIDE-1B6AC6.svg?style=for-the-badge&logo=apache-netbeans-ide&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)    

Projeto desenvolvido no curso Lógica de Programação e Algoritmos III - [Programa START da Capgemini](https://startcapgemini.com.br/)

## Índice 

* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Etapas do Desenvolvimento](#etapas-do-desenvolvimento)
* [Próximos Passos](#próximos-passos)

## Descrição do Projeto
Aplicação para gerenciamento de projetos e as tarefas envolvidas nos mesmos.

**Requisitos:**

* permitir criar projetos;
* permitir alterar projetos (em desenvolvimento);
* permitir deletar projetos (em desenvolvimento);
* permitir criar tarefas;
* permitir alterar tarefas;
* permitir deletar tarefas;

**Regras de negócio:**

* o sistema não contará com um sistema de login;
* não haverá o conceito de usuário;
* toda tarefa deve pertencer a um projeto.

## Funcionalidades e Demonstração da Aplicação

* Tela principal (com e sem tarefas):

<img src="/images/general.gif">

* Tela/cadastro de projetos:

<img src="/images/create_projects.gif">

* Tela/cadastro de tarefas:

<img src="/images/create_tasks.gif">

* Atualização de tarefas (campos `Nome`, `Descrição` e `Prazo`):

<img src="/images/update_tasks.gif">

* Atualização de tarefas (campo `Tarefa concluída`):

<img src="/images/update_tasks_status.gif">

* Exclusão de tarefas:

<img src="/images/delete_tasks.gif">

## Tecnologias Utilizadas

* Ubuntu 22.04.3 LTS
* JDK 21.0.1 
* Gradle 8.3-rc-1
* Apache NetBeans IDE 19
* MySQL (XAMPP para Linux 8.2.4-0)

## Acesso ao Projeto

**Repositório:**

1. Clonar o repositório
```
git clone https://github.com/ana-karine/capgemini_school.git
```

2. Utilizando o NetBeans, abrir o projeto `TodoApp` (localizado no diretório `/capgemini_school/todo_app`)

3. Siga todos os passos referentes ao Banco de Dados

4. No NetBeans, executar o arquivo `MainScreen.java` (localizado no diretório /capgemini_school/todo_app/TodoApp/app/src/main/java/view)

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

3. No phpMyAdmin, importar o database `todoApp.sql` (localizado no diretório `/capgemini_school/todo_app/database`)

## Etapas do Desenvolvimento

* criação do banco de dados
* criação das classes de modelo
* criação da conexão com o banco de dados
* criação das classes de controle (acesso aos dados do banco)
* criação da interface gráfica
    - criação da tela principal
        - criação do CellRenderer Prazo
        - criação do CellRenderer Editar e Deletar
    - criação da tela de cadastro de Projeto
    - criação da tela de cadastro de Tarefa
* implementação dos eventos
    - validações
* ajustes finais
* testes da aplicação

## Próximos Passos
  
* criação do conceito de `tags` para que possamos atribuí-las as tarefas;
* criação do conceito de `conta` e `usuário`;
* construção de uma `tela de login`;
* permitir a alteração dos dados da tarefa, abrindo a `tela de tarefas` com os dados carregados, ao clicar no botão de editar.

