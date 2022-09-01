<h1 align="center"> Projeto Talker Manager💻 </h1>
<h2 align="center"> Node.js, Express e Módulo.fs </h2>

 <div align="center">
 
 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
 ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
 ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
 
</div>
<br/>

<h2 align="left"> Sobre: </h2>

Nesse projeto o desafio foi desenvolver uma API, com o ambiente de execução Node.js, utilizando o framework Express.
Era necessário utilizar o conjunto de operações que constituem a forma de manipulação de dados nomeada como CRUD (Create, Read, Update e Delete).
Foi construida uma aplicação de cadastro de talkers(palestrantes), onde é possível, cadastrar, visualizar, pesquisar, editar e excluir informações.

## Tecnologias utilizadas:
- Node.js
- Express.js
- Módulo.fs
- CRUD

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e;
 - Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.
 
 ## Instalação do projeto localmente:
 
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em pedrodc1236@gmail.com

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:pedrodc1236/project-talker-manager.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm install** para instalar todas as dependências necessárias:
```javascript
  cd project-talker-manager
  npm install
```

- ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente e validar as funcionalidades, basta executar o comando:
```javascript
docker run -p 3306:3306 --name mysql_57 -e MYSQL_ROOT_PASSWORD=1234 -d mysql:5.7 mysqld --default-authentication-plugin=mysql_native_password
```
- Depois de usar o comando acima, agora basta executar os testes digitando no terminal:
```javascript
MYSQL_USER=root MYSQL_PASSWORD=1234 HOSTNAME=localhost npm test
```

 
