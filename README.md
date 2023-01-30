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
   Apenas a rota de create a new user não necessita ter um token nos Headers.Authorization, todas as outras precisam

utiliza a variável {{URL}} = http://localhost:3005 para evitar repetições

### Referentes a users:

1 - Create a new user: {{URL}}/api/v1/users
Body utilizado:
{
"name": "coodesh",
"email": "coodesh@gmail.com",
"password": "Coodesh@1234"
}

2- Login: {{URL}}/api/auth/login
Agora deve-se copiar o token retornado e utilizar nos headers como especificado
Body utilizado:
{
"email": "coodesh@gmail.com",
"password": "Coodesh@1234"
}

3 - Get all users: {{URL}}/api/v1/users

4 - Get one users: {{URL}}/api/v1/users/:idUsuario

5 - Update user: {{URL}}/api/v1/users/:idUsuario
Body utilizado:
{
"name": "Coodesh Novo",
"email": "coodeshNovo.com"
}

6 - Delete a user: {{URL}}/api/v1/users/:idUsuario

### Referentes a Empresas:

1 - Create a new company: {{URL}}/api/v1/companies
Body Utilizado:
{
"userId": "userIdRetornadoDeAlgumaRequisicaoAnterior",
"name": "teste coodesh",
"website": "https://coodesh.com",
"cnpj": "07.401.436/0002-12"
}

2 - Get all companies: {{URL}}/api/v1/companies

3 - Get company by Id: {{URL}}/api/v1/:idEmpresa

4 - Get company by UserId: {{URL}}/api/v1/companies/company/idUsuario

5 - Update a company: {{URL}}/api/v1/companies/:companyId
Body utilizado:
{
"name": "Coodesh atualizado",
"website": "https://google.com",
"cnpj": "07.401.436/0302-12"
}

6 - Delete a company: {{URL}}/api/v1/companies/:companyId

### Referentes a Locais:

1 - Create a new location: {{URL}}/api/v1/locations
Body utilizado:
{
"companyId": "IdEmpresaRetornadoPorOutraRequestAnterior",
"name": "local coodesh",
"cep": "69090-000",
"street": "rua 1",
"number": "239",
"neighborhood": "Bairro alto",
"city": "Manaus",
"UF": "Amazonas"
}

2 - Get all locals: {{URL}}/api/v1/locations

3 - Get locals by id: {{URL}}/api/v1/locations/:locationId

4 - Get all locals by companyId: {{URL}}/api/v1/locations/local/:companyId

5 - Update a locals: {{URL}}/api/v1/locations/:localId
Body utilizado:
{
"name": "local da codesh",
"cep": "69090-020",
"street": "rua 3",
"number": "7",
"neighborhood": "bairro 2",
"city": "São Paulo",
"UF": "São Paulo"
}

6 - Delete a location: {{URL}}/api/v1/locations/:locationId

> Link para a apresentação do projeto [Clique aqui!](https://www.loom.com/share/870fc5fe02b545248ab0be5005dd494c)
