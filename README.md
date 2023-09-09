# API REST com Node.js, Express e PostgreSQL (utilizando o ORM Prisma)
## Avanti Bootcamp | Desenvolvimento Full Stack - Instituto Atlântico

Esse projeto implementa uma API com Node.js, utilizando o PostgreSQL e o ORM Prisma. Esse é o **desafio 02** do **Avanti Bootcamp** da turma de **Desenvolvimento Full Stack** do **Instituto Atlântico**. 

**Professor**: Germanno Teles
**Monitora**: Jheyele Raquel

## Como rodar

1- Clone este repositório:
```
    git clone https://github.com/moacirdavidag/desafio02-avanti.git
```

2- Instale as dependências do projeto:

```
    npm install
```

3- Altere o arquivo de configuração das variáveis de ambiente chamado **.env** na pasta raíz do projeto, colocando a URL do seu banco de dados PostgreSQL:

```
    DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/<nome_do_banco_de_dados>?schema=public"
```

A URL padrão do PostgreSQL em sua máquina é o localhost (127.0.0.1) e a porta padrão 5432. Alterar conforme as necessidades.

4- Rodar o comando de geração de artefatos do Prisma:

```
    npx prisma generate
```

5- Por fim, enviar o schema do banco de dados criado com o Prisma para o seu banco de dados:

```
    npx prisma db push
```

## Documentação da API

### Jogador

#### GET /jogadores 

**Exemplo de URL**: http://localhost:3000/jogadores

**Descrição**: Retorna todos os jogadores armazenados no banco de dados.

**Response**: application/json, HTTP Status 200 (OK).

<br />

#### GET /jogador/:id 

**Exemplo de URL**: http://localhost:3000/jogador/9857abfc-8d4f-4834-8bee-b23c7230a454

**Descrição**: Retorna um jogador pelo seu id.

**Caso exista o jogador passado pelo ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("Jogador não encontrado!").

#### POST /jogador 

**Exemplo de URL**: http://localhost:3000/jogador/

**Descrição**: Insere um novo jogador no banco de dados.

**Corpo da requisição:** em JSON:

```
{
    "nome": String,
    "idade": Int,
    "timeId:" String
}
```
**Exemplo de corpo da requisição:**

```
{
    "nome:" "Pedro",
    "idade": 25,
    "timeId: "b8c46372-3266-4b39-86fe-baafb148b828"
}
```

**Caso o jogador seja inserido com sucesso:**
**Response**: application/json, HTTP Status 201 (Retorna o objeto do jogador criado).

**Caso o time passado por id não exista e/ou seja encontrado:**
**Response**: application/json, HTTP Status 404 ("O time passado por id não foi encontrado!").

#### PUT /jogador/:id 

**Exemplo de URL**: http://localhost:3000/jogador/ddc9f36a-a12f-4a4b-9f6a-334efebea264

**Descrição**: Atualiza o registro de um jogador no banco de dados a partir do seu id.

**Corpo da requisição:** em JSON:

```
{
    "nome": String (OPCIONAL),
    "idade": Int (OPCIONAL),
    "timeId:" String (OPCIONAL)
}
```
**Exemplo de corpo da requisição:**

```
{
    "nome:" "Pedro",
    "idade": 30,
    "timeId: "b8c46372-3266-4b39-86fe-baafb148b828"
}
```

**Caso o jogador seja inserido com sucesso:**
**Response**: application/json, HTTP Status 201 (201).

**Caso o time passado por id não exista e/ou seja encontrado:**
**Response**: application/json, HTTP Status 404 ("O time passado por id não foi encontrado!").

#### DELETE /jogador/:id 

**Exemplo de URL**: http://localhost:3000/jogador/9857abfc-8d4f-4834-8bee-b23c7230a454

**Descrição**: Exclui um jogador pelo seu id.

**Caso exista o jogador passado pelo ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("Jogador não encontrado!").

### campeonato
#### GET /campeonato

**Exemplo de URL**: http://localhost:3000/campeonato
**Descrição**: Retorna todos os campeonatos armazenado no banco de dados.
**response**: application/json, HTTP Status 200 (ok).

<br>

### GET /campeonato/:id

**Exemplo da URL** http://localhost:3000/campeonato/b8c46372-3266-4b39-86fe-baafb148b828
**descrição** Retorna um campeonato pelo seu id.
**caso exista um campeonato passado o ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Satus 200 (OK).


#### POST/campeonato
**Exemplo de URL**: http://localhost:3000/campeonato/
**Descrição** Insere um novo campeonato no banco de dados.
**corpo da requisição** em JSON:

````
    "nome": String,
    "data_inicio": Date,
    "data_fim": Date,

````
**exemplo de corpo da requisição**

````
    {
    "nome": "brasileirão",
    "dataInicio": "2023-09-01",
    "dataFim": "2023-12-31",
    }
````
**caso a data de ínicio for maior que de fim**
**Response**: application/json, HTTP Status 400 ("Data de início maior do que a data final!")


**caso o campeonato seja inserido com sucesso:**
**Response**: application/json, HTTP Status 201 (retorna o objeto do campeonato criado).

**Caso o campeonato passado por id não exista e/ou seja encontrado:**
**Response**: application/json, HTTP Status 500 (ERRO)

#### PUT /campeonato/id ####

**Exemplo de URL**: http://localhost:3000/campeonato/b8c46372-3266-4b39-86fe-baafb148b828

**Descrição:** Atualiza o registo de um campeonato no banco de dados a partir de seu Id.

**Corpo da requisição em JSON:**

````
    "nome": String,
    "data_inicio": Date,
    "data_fim": Date,

````

**Caso o campeonato seja atualizado com sucesso:**
**Response:** application/json, HTTP Status 201 (201).

**Caso o campeonato passado por id não exista e/ou seja encontrado:**
**Response**: application/json, HTTP Status 404 ("'Campeonato não encontrado'")

**caso a data de ínicio for maior que de fim**
**Response**: application/json, HTTP Status 400 ("Data de início maior do que a data final!")

### DELETE /campeonato/id ####
**Exemplo de URL**: http://localhost:3000/campeonato/b8c46372-3266-4b39-86fe-baafb148b828
**Descrição:** Exclui um campeonato pelo seu id.

**Caso exista um campeonato passado pelo ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("campeonato não encontrado!").

**caso a data de ínicio for maior que de fim**
**Response**: application/json, HTTP Status 400 ("Data de início maior do que a data final!")

