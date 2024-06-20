# nodejs-challenge


1. Create a DB using your preferred DBMS. Field “Id” should be auto-incremental, properties should be the same as on image. And you need to create a second table with the name “Fabrica” with “IdFab” as the primary key and foreign key of table products and the other field needs to be “descripcion” and need to be text typed having the name of the product.
2. Create and endpoint in node.js to GET all products grouped by FabricID (“IdFab”)
3. Create another endpoint, POST, to create a new product, it should insert a new
product on the table “Productos” and “Fabrica”. The endpoint should validate each field and type, if creation is correct, you should send a “Status” field in response, with “true” Boolean value, and a “Payload” field with product information. If sent information is invalid related to types or missing fields, you should return a “400” error with a custom message saying “Missing information”.
4. Create a new endpoint in typescript to DELETE a product by ID.
5. All 3 endpoints should have their own controllers, and routes should be exported to
the main server file.
6. Create an authentication method using JWT to secure endpoint calls by using
“Bearer” token to authenticate.
7. Create a POSTMAN collection to make HTTP calls more simple.
8. Create 3 Unit Test using the preferred Testing library to test 3 endpoints.
9. Ideally create a “docker compose” file to create DB and run API easily.
10. Create a fork from original repo
https://github.com/sebasworkana/nodejs-challenge.git and in your personal repository (forked repository) Create a new branch from master with you name and last name, and send a PR to this repo (master branch).
 
11. Finally give access to the repo to sebasworkana user in github.


Variáveis de Ambiente
As seguintes variáveis de ambiente precisam ser definidas para que a aplicação funcione corretamente:

PORT: A porta na qual a aplicação irá escutar dentro do contêiner.
DATABASE: O caminho para o arquivo do banco de dados SQLite.
SECRET_KEY: Uma chave secreta usada pela aplicação para fins de segurança.
TOKEN: Um token de acesso necessário para a aplicação.
Passos para Rodar a Aplicação

Executar o Contêiner Docker

Use o comando abaixo para iniciar o contêiner, passando as variáveis de ambiente necessárias e mapeando as portas corretamente:

docker run -d -p 5000:9000 \
   -e PORT=9000 \
   -e DATABASE=/app/prisma/dev.db \
   -e SECRET_KEY='Workana' \
   -e TOKEN=seu_token_de_acesso \
   nodejs-challange

.
├── Dockerfile
├── .dockerignore
├── .env
├── .gitignore
├── jest.config.js
├── node_modules 
├── prisma 
│   ├── migrations
│   ├── dev.db
│   └── schema.prisma
├── src
│   ├── database
│   ├── dist
│   ├── helpers
│   ├── htts
│   │   ├── controllers
│   │   │   ├── FactoryController
│   │   │   └── ProductControllers
│   │   ├── middlewares
│   │   └── routes
│   ├── tests
│   └── ...
└── README.md

Dockerfile: Contém as instruções para construir a imagem Docker.
prisma: Diretório contém arquivos de criação de tabelas e conexão com banco de dados.
src: Diretório que contém o código da aplicação.
    database: Arquivo de conexão com banco de dados e models da aplicação.
    dist: Arquivos de inicialização da aplicação.
    helpers: Possui arquivos de ajuda.
    https: Possui arquivos que tratam as requisições HTTP, como Rotas, Middlewares e Controllers.
    test: Possui os testes da aplicação