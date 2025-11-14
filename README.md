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
![Diagrama de Casos de Uso](./Diagramas/Casos_de_Uso_1.png)  
![Diagrama de Casos de Uso](./Diagramas/Casos_de_Uso_2.png)

---

## 🗄️ Banco de Dados

### Estrutura das Tabelas (DDL)
<!-- Adicione aqui os scripts SQL de criação das tabelas -->
DDL (Linguagem de Definição de Dados) -- 1. Cria o banco de dados 
CREATE DATABASE IF NOT EXISTS Univercidade; -- 2. Seleciona o banco de dados para uso 
USE Univercidade; -- 3. Tabela Pessoa_Fisica 
CREATE TABLE Pessoa_Fisica ( 
pf_id INT PRIMARY KEY AUTO_INCREMENT, 
nome VARCHAR(100) NOT NULL, 
cpf VARCHAR(11) UNIQUE NOT NULL, 
data_nascimento DATE, 
endereco VARCHAR(255), 
telefone VARCHAR(15), 
email VARCHAR(100) UNIQUE 
); -- 4. Tabela Pessoa_Juridica 
CREATE TABLE Pessoa_Juridica ( 
pj_id INT PRIMARY KEY AUTO_INCREMENT, 
razao_social VARCHAR(150) NOT NULL, 
cnpj VARCHAR(14) UNIQUE NOT NULL, 
endereco VARCHAR(255), 
telefone VARCHAR(15), 
email VARCHAR(100) UNIQUE 
); -- 5. Tabela Professores (associa-se a Pessoa_Fisica) 
CREATE TABLE Professores ( 
professor_id INT PRIMARY KEY AUTO_INCREMENT, 
pf_id INT UNIQUE NOT NULL, -- Chave estrangeira para Pessoa_Fisica 
matricula VARCHAR(20) UNIQUE NOT NULL, 
departamento VARCHAR(50), 
salario DECIMAL(10, 2), 
FOREIGN KEY (pf_id) REFERENCES Pessoa_Fisica(pf_id) 
); -- 6. Tabela Alunos (associa-se a Pessoa_Fisica) 
CREATE TABLE Alunos ( 
aluno_id INT PRIMARY KEY AUTO_INCREMENT, 
pf_id INT UNIQUE NOT NULL, -- Chave estrangeira para Pessoa_Fisica 
ra VARCHAR(20) UNIQUE NOT NULL, -- Registro Acadêmico 
curso VARCHAR(100), 
periodo INT, 
FOREIGN KEY (pf_id) REFERENCES Pessoa_Fisica(pf_id) 
); -- 7. Tabela Fornecedores (associa-se a Pessoa_Juridica) 
CREATE TABLE Fornecedores ( 
fornecedor_id INT PRIMARY KEY AUTO_INCREMENT, 
pj_id INT UNIQUE NOT NULL, -- Chave estrangeira para Pessoa_Juridica 
contato VARCHAR(100), 
telefone_contato VARCHAR(15), 
area_fornecimento VARCHAR(100), 
FOREIGN KEY (pj_id) REFERENCES Pessoa_Juridica(pj_id) 
); 
DDL (Linguagem de Definição de Dados)Os comandos DDL incluem CREATE (criar), 
ALTER (alterar) e DROP (excluir). 
CREATE TABLE Disciplinas ( 
disciplina_id INT PRIMARY KEY AUTO_INCREMENT, 
nome_disciplina VARCHAR(100) NOT NULL, 
carga_horaria INT, 
departamento_responsavel VARCHAR(50) 
); 
CREATE INDEX idx_pj_cnpj 
ON Pessoa_Juridica (cnpj); - - - - - - - - - - 
ALTER TABLE Professores 
ADD COLUMN data_contratacao DATE; 
ALTER TABLE Professores 
MODIFY COLUMN departamento VARCHAR(75); - - - - - - - - - - 
DROP TABLE Fornecedores; 
DROP INDEX idx_pj_cnpj ON Pessoa_Juridica;

### Inserção de Dados (DML)
<!-- Adicione aqui os scripts SQL de inserção de dados -->
-- Pessoas Físicas (Professores e Alunos) 
INSERT INTO Pessoa_Fisica (nome, cpf, data_nascimento, endereco, telefone, email) VALUES -- 5 Professores 
('Ana Maria Silva', '11111111111', '1975-05-10', 'Rua Alfa, 100', '(11) 9876-5432', 
'ana.silva@univercidade.br'), 
('Bruno Castro Oliveira', '22222222222', '1968-12-01', 'Av. Beta, 200', '(11) 8765-4321', 
'bruno.castro@univercidade.br'), 
('Carla Dias Pereira', '33333333333', '1980-03-25', 'Rua Gama, 300', '(11) 7654-3210', 
'carla.dias@univercidade.br'), 
('David Lima Santos', '44444444444', '1970-08-15', 'Av. Delta, 400', '(11) 6543-2109', 
'david.lima@univercidade.br'), 
('Erica Souza Costa', '55555555555', '1979-11-20', 'Rua Epsilon, 500', '(11) 5432-1098', 
'erica.souza@univercidade.br'), -- 15 Alunos 
('Fernando Alves', '66666666666', '2000-01-01', 'Rua da Paz, 1', '(11) 1234-5678', 
'fernando.alves@aluno.br'), 
('Giovana Rocha', '77777777777', '2001-02-02', 'Av. do Sol, 2', '(11) 2345-6789', 
'giovana.rocha@aluno.br'), 
('Henrique Mendes', '88888888888', '2002-03-03', 'Rua da Lua, 3', '(11) 3456-7890', 
'henrique.mendes@aluno.br'), 
('Isabela Nunes', '99999999999', '2003-04-04', 'Av. da Estrela, 4', '(11) 4567-8901', 
'isabela.nunes@aluno.br'), 
('João Paulo', '10000000000', '2000-05-05', 'Rua do Mar, 5', '(11) 5678-9012', 'joao.paulo@aluno.br'), 
('Karen Lemos', '10100000000', '2001-06-06', 'Av. da Terra, 6', '(11) 6789-0123', 
'karen.lemos@aluno.br'), 
('Lucas Mattos', '10200000000', '2002-07-07', 'Rua do Fogo, 7', '(11) 7890-1234', 
'lucas.mattos@aluno.br'), 
('Mariana Neves', '10300000000', '2003-08-08', 'Av. do Vento, 8', '(11) 8901-2345', 
'mariana.neves@aluno.br'), 
('Nicole Pires', '10400000000', '2000-09-09', 'Rua da Água, 9', '(11) 9012-3456', 
'nicole.pires@aluno.br'), 
('Otávio Queiroz', '10500000000', '2001-10-10', 'Av. do Céu, 10', '(11) 0123-4567', 
'otavio.queiroz@aluno.br'), 
('Patrícia Ramos', '10600000000', '2002-11-11', 'Rua da Floresta, 11', '(11) 1234-5670', 
'patricia.ramos@aluno.br'), 
('Rafael Siqueira', '10700000000', '2003-12-12', 'Av. do Rio, 12', '(11) 2345-6780', 
'rafael.siqueira@aluno.br'), 
('Sofia Tavares', '10800000000', '2000-01-13', 'Rua da Montanha, 13', '(11) 3456-7890', 
'sofia.tavares@aluno.br'), 
('Thiago Urbano', '10900000000', '2001-02-14', 'Av. do Lago, 14', '(11) 4567-8900', 
'thiago.urbano@aluno.br'), 
('Vivian Ximenes', '11000000000', '2002-03-15', 'Rua do Campo, 15', '(11) 5678-9010', 
'vivian.ximenes@aluno.br'); -- Professores (pf_id 1 a 5) 
INSERT INTO Professores (pf_id, matricula, departamento, salario) VALUES 
(1, 'PR001', 'Ciências Exatas', 8500.00), 
(2, 'PR002', 'Humanidades', 9200.00), 
(3, 'PR003', 'Engenharias', 7800.00), 
(4, 'PR004', 'Saúde', 8800.00), 
(5, 'PR005', 'Artes', 7500.00); -- Alunos (pf_id 6 a 20) 
INSERT INTO Alunos (pf_id, ra, curso, periodo) VALUES 
(6, 'AL0001', 'Engenharia Civil', 1), 
(7, 'AL0002', 'Direito', 3), 
(8, 'AL0003', 'Medicina', 2), 
(9, 'AL0004', 'Administração', 5), 
(10, 'AL0005', 'Sistemas de Informação', 4), 
(11, 'AL0006', 'Arquitetura', 1), 
(12, 'AL0007', 'Ciências Contábeis', 6), 
(13, 'AL0008', 'Psicologia', 2), 
(14, 'AL0009', 'Design Gráfico', 3), 
(15, 'AL0010', 'Jornalismo', 7), 
(16, 'AL0011', 'Relações Internacionais', 1), 
(17, 'AL0012', 'Educação Física', 8), 
(18, 'AL0013', 'Física', 4), 
(19, 'AL0014', 'Química', 5), 
(20, 'AL0015', 'Gastronomia', 3); -- Pessoas Jurídicas (Fornecedores) 
INSERT INTO Pessoa_Juridica (razao_social, cnpj, endereco, telefone, email) VALUES 
('ABC Material de Escritório Ltda', '01010101000101', 'Rua do Escritório, 10', '(11) 3333-4444', 
'contato@abc-escritorio.com.br'), 
('XYZ Tecnologia S.A.', '02020202000202', 'Av. da Tecnologia, 20', '(11) 5555-6666', 
'vendas@xyz-tech.com.br'), 
('Serviços de Limpeza Boa Vista EIRELI', '03030303000303', 'Estrada da Limpeza, 30', '(11) 
7777-8888', 'comercial@boavista.com.br'), 
('Catering Sabor e Arte Ltda', '04040404000404', 'Praça da Alimentação, 40', '(11) 9999-0000', 
'orcamento@saborearte.com'); -- Pessoas Jurídicas (Fornecedores) 
INSERT INTO Pessoa_Juridica (razao_social, cnpj, endereco, telefone, email) VALUES 
('ABC Material de Escritório Ltda', '01010101000101', 'Rua do Escritório, 10', '(11) 3333-4444', 
'contato@abc-escritorio.com.br'), 
('XYZ Tecnologia S.A.', '02020202000202', 'Av. da Tecnologia, 20', '(11) 5555-6666', 
'vendas@xyz-tech.com.br'), 
('Serviços de Limpeza Boa Vista EIRELI', '03030303000303', 'Estrada da Limpeza, 30', '(11) 
7777-8888', 'comercial@boavista.com.br'), 
('Catering Sabor e Arte Ltda', '04040404000404', 'Praça da Alimentação, 40', '(11) 9999-0000', 
'orcamento@saborearte.com'); 
SELECT 
    PF.nome AS Nome_Aluno, 
    PF.cpf AS CPF, 
    A.ra AS Registro_Academico, 
    A.curso AS Curso, 
    A.periodo AS Periodo 
FROM 
    Alunos A 
INNER JOIN 
    Pessoa_Fisica PF ON A.pf_id = PF.pf_id 
ORDER BY 
    PF.nome; 
 
SELECT 
    PF.nome AS Nome_Aluno, 
    PF.cpf AS CPF, 
    A.ra AS Registro_Academico, 
    A.periodo AS Periodo 
FROM 
    Alunos A 
INNER JOIN 
    Pessoa_Fisica PF ON A.pf_id = PF.pf_id 
WHERE 
    A.curso = 'Direito' 
ORDER BY 
    PF.nome; 
 - - - - - - - - - 
 
UPDATE Professores 
SET salario = 9000.00 
WHERE matricula = 'PR001'; 
 
UPDATE Alunos 
SET 
    curso = 'Ciência da Computação', 
    periodo = 6 
WHERE 
    ra = 'AL0005'; 
 - - - - - - - - - 
 
DELETE FROM Alunos 
WHERE ra = 'AL0015'; 
 
DELETE FROM Pessoa_Fisica 
WHERE pf_id = 20;

---

## ⚙️ Como Executar
<!-- Explique aqui como rodar o projeto ou executar os scripts SQL -->

---

## 📌 Observações
<!-- Adicione aqui quaisquer observações importantes sobre o projeto -->

---

## 📚 Referências
<!-- Adicione links ou referências que foram usadas no projeto -->

