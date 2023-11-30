Definição do projeto desenvolvido no curso Lógica de Programação e Algoritmos III -  [Programa START da Capgemini](https://startcapgemini.com.br/)

## To Do App

**Descrição:** aplicação para gerenciamento de projetos e as tarefas envolvidas nesses projetos.

**Objetivo:** resolver a questão de organização de tarefas de um ou vários projetos.

**Entidades:**

* Projeto
  * Id (PK)
  * Nome
  * Descrição
  * Data de Criação
  * Data de Atualização
* Tarefa
  * Id (PK)
  * Id do Projeto (FK)
  * Nome
  * Descrição
  * Status
  * Observações
  * Prazo
  * Data de Criação
  * Data de Atualização

**Requisitos:**

* permitir criar o Projeto;
* permitir alterar o Projeto;
* permitir deletar o Projeto;
* permitir criar a Tarefa;
* permitir alterar a Tarefa;
* permitir deletar a Tarefa;

**Regras de negócio:**

* o sistema não contará com um sistema de login;
* não haverá o conceito de usuário;
* toda tarefa deve pertencer a um projeto.

**Tecnologias utilizadas:**

* JDK 21.0.1 
* Apache NetBeans IDE 19
* MySQL (XAMPP para Linux 8.2.4-0)

**Etapas do desenvolvimento:**

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

**Próximos passos:**
  
* criação do conceito de `tags` para que possamos atribuí-las as Tarefas;
* criação do conceito de `conta` e `usuário`;
* construção de uma `tela de login`;
* permitir a alteração dos dados da Tarefa, abrindo a `tela de tarefas` com os dados carregados, ao clicar no botão de editar.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
