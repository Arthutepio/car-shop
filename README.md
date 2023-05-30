# Boas vindas ao Car Shop!

Este é um projeto de backend que tem como objetivo desenvolver uma API para gerenciar uma concessionária de veículos. O projeto foi desenvolvido com foco na aplicação dos princípios da Programação Orientada a Objetos (POO), utilizando o banco de dados MongoDB através do framework Mongoose.

## 🔧 Instalação
Para utilizar o repositório no desenvolvimento, siga os seguintes passos:

1 - Certifique-se de ter o Node.js e o Docker instalados em sua máquina.

2 - Clone o repositório: 
```
git clone git@github.com:Arthutepio/car-shop.git
cd car-shop
```
3 - Instale as dependências na raiz do projeto:
```
npm install
```
4 - Inicie os serviços definidos em um arquivo de configuração do Docker Compose:
```
docker compose up -d
```
5 - Para acesso ao terminal interativo do container criado pelo compose:
```
docker exec -it car_shop bash
```
6 - Agora é só testar CRUD com alguma ferramenta de sua preferência. (Thuder Client, Insomnia, Postman... )

## 🛠️ Desenvolvido com:
* [Node.js](https://nodejs.org/pt-br/docs/) - para execução de testes e instalação de pacotes de bibliotecas;
* [TypeScript](https://www.typescriptlang.org/) - linguagem de programação fortemente tipada;
* [MongoDB](https://www.mongodb.com/) - banco de dados não-relacional orientado a documentos;
* [Mongoose](https://mongoosejs.com/) - modelagen de objetos para node.js
* [Git](https://git-scm.com/doc) - para versionamento;
* [POO](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas)- Progamação orientada a objetos;
* Teste de integração


## Tasks:
Parte do projeto foi desenvolvido pela [Trybe](https://app.betrybe.com/) e me foi solicitado que desenvolvesse os seguintes requisitos:
1. Crie a rota /cars onde seja possível cadastrar um carro
2. Crie o endpoint para listar carros
3. Escreva testes para cobrir 30% da camada de Service
4. Crie a rota /cars/:id onde seja possível atualizar um carro por ID
5. Crie a rota /motorcycles onde seja possível cadastrar uma moto
6. Escreva testes para cobrir 60% da camada de Service
7. Crie a rota /motorcycles onde seja possível listar motos
8. Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID
9. Escreva testes para cobrir 80% da camada de Service
10. Crie a rota /cars/:id onde seja possível excluir um carro por ID
11. Crie a rota /motorcycles/:id onde seja possível excluir uma moto por ID
12. Escreva testes de unidade para cobrir 100% da sua aplicação


Criado por [Trybe](https://www.betrybe.com/) e desenvolvido com ❤️ por [Arthur Costa](https://arthutepio-portifolio.vercel.app/) 😊
[![Linkedin](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/arthutepio/) [![Github](https://skillicons.dev/icons?i=github)](https://www.linkedin.com/in/arthutepio/) 
