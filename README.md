> This is a challenge by [Coodesh](https://coodesh.com/)

# Teste Novos Devs HubLocal

## Descrição do projeto:

Projeto desenvolvido com objetivo de fazer cadastro de empresas e de locais pertencentes a cada empresa. Para isso, se faz necessário estar cadastrado no sistema para poder efetuar login e assim ter acesso as funcionalidades.

## Linguagem, Framework e tecnologias usadas:

- Typescript
- NestJs
- PostgreSQL
- pgAdmin4
- TypeORM
- JWT
- Passport

## Como instalar e usar o projeto (instruções):

1. Deve-se ter o nodejs e npm instalado (versões utilizadas: node - 16.13.2 | npm - 8.1.2)
2. No pgAdmin deve-se criar a database "coodesh" para posteriormente podermos fazer a conexão com ela, ela deve estar dentro do owner "postgres". O host está definido como localhost, a port é a 5432, username 'postgres', senha definida para o user postgres na hora da criação foi 1234 e como ja dito o nome da base de dados é 'coodesh'

Exemplo de script para criação da database:
CREATE DATABASE coodesh
WITH
OWNER = postgres
ENCODING = 'UTF8'
CONNECTION LIMIT = -1
IS_TEMPLATE = False;

3. Fazer o clone do repositório, abrir na IDE (IDE utilizada: vsCode), abrir um terminal e rodar o comando: 'npm i' para instalar dependências^

4. Após todas as dependências instaladas, rodar o comando 'npm run start:dev' no terminal para iniciar a aplicação

5. Tudo dando certo, pode-se ser realizado os testes no postman/insomnia/etc

6. Rotas utilizadas:
   > Referentes a users
   > 1 - Create a new user: http://localhost:3005/api/v1/users
   > Body utilizado:
   > {
   > "name": "teste",
   > "email": "cesar@gmail.com",
   > "password": "Cesar@1234"
   > }
