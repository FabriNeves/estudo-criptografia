# Sistema de sessão utilizando JWT e Express

Este projeto consiste em um sistema de sessão utilizando a tecnologia de JSON Web Token (JWT) e a biblioteca Express para criação de rotas.

## Instalação
Clone o repositório:
``` 
git clone https://github.com/FaSn0w/estudo-criptografia.git
``` 
## Instale as dependências:
```
npm install
``` 
Crie um arquivo .env na raiz do projeto com as seguintes informações:
```
SECRET=minha_chave_secreta # Chave secreta para geração dos tokens JWT
```
## Inicie o servidor:
```
npm start
```
ou
```
npm run dev
```
para iniciar o servidor em modo de desenvolvimento com o nodemon.

## Rotas

### Login

POST /login

Realiza o login de um usuário. Deve receber no corpo da requisição as informações de Nome, email e password.

### Rota autenticada

GET /login/dev

Rota que exige autenticação. Deve ser acessada enviando no header da requisição um token JWT válido obtido após realizar o login.

## Tecnologias utilizadas
- Node.js
- Express
- JWT
- bcrypt
- Sequelize (ORM para acesso ao banco de dados)
- MySQL (banco de dados relacional)

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.