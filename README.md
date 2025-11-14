# Senac | Disciplina de PI | Grupo 16

## 2º Entrega do Projeto Integrador

### Tema: Proposta de Sistema Orientado a Objetos

### Texto base

Para um(a) desenvolvedor(a) ou engenheiro(a) de software, um software pode seguir orientações formalizadas com a Linguagem Unificada de Modelagem (UML).
A UML permite que desenvolvedores visualizem o que foi projetado em diagramas padronizados, facilitando o entendimento por todos da equipe.

### Enunciado

A segunda entrega do Projeto Integrador será a prototipação do que foi formalizado na primeira entrega.
O protótipo deve refletir a modelagem realizada anteriormente.

### 1. Desenvolvimento dos protótipos da interface

O grupo precisará desenvolver os protótipos da interface do sistema, de acordo com os diagramas de caso de uso que foram desenvolvidos na primeira fase do projeto.

Os protótipos devem conter as seguintes jornadas:

- Cadastro de Pessoa Física

- Cadastro de Pessoa Jurídica

- Cadastro de Professores

- Cadastro de Fornecedores

- Cadastro de Alunos

> Observação: desenvolver um protótipo funcional usando ferramentas como Miro ou Figma, refletindo o que foi modelado anteriormente.

### 2. Criação do repositório no GitHub

Todos os integrantes do grupo precisam criar uma conta no GitHub.

O grupo deve definir quem ficará responsável pela criação do repositório do projeto.

Após a criação, todos os demais integrantes devem ser adicionados como contribuidores(as).

O grupo deve se organizar para criar o arquivo de documentação (README.md) e anexar:

- Todos os protótipos desenvolvidos;

- Os diagramas criados na fase 1, em formato Markdown.

# Projeto de Sistema de Cadastros Universidade.

## 🔹 Descrição do Projeto
<!-- Adicione aqui a descrição do projeto -->

---

## 🎯 Objetivos
<!-- Liste aqui os objetivos do projeto -->

---

## 👥 Integrantes do Grupo
Amaury Serpa Santos Neto  
Diego Paladini Machado  
Diogo Oliveira Rodrigues  
Erika Kívia Santos Barbosa  
Murilo Luzzi Do Couto  
Ricardo Bertoldo  

---

## 🖥️ Protótipos de Interface
<!-- Adicione aqui os protótipos -->
### 1. Cadastro de Pessoa Física
![Protótipo Pessoa Física](./Protótipos/Cadastro_PessoaFisica.png)

### 2. Cadastro de Pessoa Jurídica
![Protótipo Pessoa Jurídica](./Protótipos/Cadastro_PessoaJuridica.png)

### 3. Cadastro de Professores
![Protótipo Professores](./Protótipos/Cadastro_Professores.png)

### 4. Cadastro de Fornecedores
![Protótipo Fornecedores](./Protótipos/Cadastro_Fornecedores.png)

### 5. Cadastro de Alunos
![Protótipo Alunos](./Protótipos/Cadastro_Alunos.png)

---

## 📊 Diagramas da Fase 1
<!-- Adicione aqui os diagramas de casos de uso -->
![Diagrama de Casos de Uso](./diagramas_1a_entrega/diagrama_casos_de_uso.jpg)  
![Diagrama de Classe](./diagramas_1a_entrega/diagrama_de_classe.png)

---

## 🗄️ Banco de Dados

### Scripts SQL
Todos os scripts SQL para criação do banco de dados, tabelas, inserção de dados e consultas estão disponíveis no arquivo:

📄 **[script.sql](./script.sql)**

O arquivo contém:
- **DDL (Data Definition Language)**: Criação do banco de dados e tabelas
- **DML (Data Manipulation Language)**: Inserção de dados de exemplo
- **DQL (Data Query Language)**: Consultas para visualização dos dados
- **Comandos de atualização e exclusão**: Exemplos de UPDATE e DELETE

---

## ⚙️ Como Executar

### Banco de Dados
1. Certifique-se de ter o MySQL instalado
2. Execute o arquivo `script.sql` em seu cliente MySQL preferido
3. O script criará automaticamente o banco de dados "Univercidade" e todas as tabelas necessárias

### Estrutura do Projeto
```
projeto/
├── README.md
├── script.sql
├── Protótipos/
│   ├── Cadastro_PessoaFisica.png
│   ├── Cadastro_PessoaJuridica.png
│   ├── Cadastro_Professores.png
│   ├── Cadastro_Fornecedores.png
│   └── Cadastro_Alunos.png
└── diagramas_1a_entrega/
    ├── diagrama_casos_de_uso.jpg
    └── diagrama_de_classe.png
```

---

## 📌 Observações
- O banco de dados foi modelado seguindo os princípios de normalização
- As tabelas possuem relacionamentos bem definidos através de chaves estrangeiras
- Foram incluídos dados de exemplo para facilitar os testes
- O script está organizado em seções para facilitar a manutenção

---

## 📚 Referências
-	FOWLER, M. UML essencial: um breve guia para a linguagem-padrão de modelagem de objetos. Porto Alegre: Bookman, 2005.  
-	LARMAN, C.; SALGADO, L. A. M. Utilizando UML e padrões: uma Introdução à Análise e ao Projeto Orientado a Objetos e ao Processamento Unificado. Porto Alegre: Bookman. 2000.  
-	PRESSMAN, R S. Engenharia de software. Rio de Janeiro: McGraw-Hill, 2006.   
-	SOMMERVILLE, Ian. Engenharia de software. 10. ed. São Paulo: Pearson, 2019.   