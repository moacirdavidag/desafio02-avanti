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

### Campeonato

#### GET /campeonatos 

**Exemplo de URL**: http://localhost:3000/campeonatos

**Descrição**: Retorna todos os campeonatos armazenados no banco de dados.

**Response**: application/json, HTTP Status 200 (OK).

<br />

#### GET /campeonato/:id 

**Exemplo de URL**: http://localhost:3000/campeonato/8c5cf5d4-2cb4-4597-9930-110bf0759058

**Descrição**: Retorna um campeonato pelo seu id.

**Caso exista o campeonato passado pelo ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("campeonato não encontrado!").

#### POST /campeonato 

**Exemplo de URL**: http://localhost:3000/campeonato/

**Descrição**: Insere um novo campeonato no banco de dados.

**Corpo da requisição:** em JSON:

```
{
    "nome": String,
    "data_inicio": DateTime,
    "data_fim:" DateTime
}
```
**Exemplo de corpo da requisição:**

```
{
  "nome": "Libertadores",
  "data_inicio": "2013-02-14T13:15:03-08:00",
  "data_fim":"2014-02-14T13:15:03-08:00"
}
```

**Caso o campeonato seja inserido com sucesso:**
**Response**: application/json, HTTP Status 201 (Retorna o objeto do campeonato criado).

**Caso o campeonato passado por id não exista e/ou seja encontrado:**
**Response**: application/json, HTTP Status 404 ("O campeonato passado por id não foi encontrado!").

#### PUT /campeonato/:id 

**Exemplo de URL**: http://localhost:3000/jogador/ddc9f36a-a12f-4a4b-9f6a-334efebea264

**Descrição**: Atualiza o registro de um jogador no banco de dados a partir do seu id.

**Corpo da requisição:** em JSON:

```
{
    "nome": String (OPCIONAL),
    "data_inicio": Int,
    "data_fim:" String
}
```
**Exemplo de corpo da requisição:**

```
{
  "nome": "Brasileirão",
  "data_inicio": "2013-02-14",
  "data_fim":"2014-02-14"
}
```

**Caso o  seja inserido com sucesso:**
**Response**: application/json, HTTP Status 201 (201).

**Caso o time passado por id não exista e/ou seja encontrado:**
**Response**: application/json, HTTP Status 404 ("O campeonato passado por id não foi encontrado!").

#### DELETE /campeonato/:id 

**Exemplo de URL**: http://localhost:3000/campeonato/8c5cf5d4-2cb4-4597-9930-110bf0759058

**Descrição**: Exclui um campeonato pelo seu id.

**Caso exista o campeonato passado pelo ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("Campeonato não encontrado!").

### Time

#### GET /times 

**Exemplo de URL**: http://localhost:3000/times

**Descrição**: Retorna todos os times armazenados no banco de dados.

**Response**: application/json, HTTP Status 200 (OK).

<br />

#### GET /time/:id 

**Exemplo de URL**: http://localhost:3000/time/9857abfc-8d4f-4834-8bee-b23c7230a454

**Descrição**: Retorna um time pelo seu id.

**Casa tenha sido passado pelos parâmetros um ID válido de time:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("Time não encontrado").

#### GET /timesCampeonato/:id 

**Exemplo de URL**: http://localhost:3000/timesCampeonato/8c5cf5d4-2cb4-4597-9930-110bf0759058

**Descrição**: Retorna todos os times que estão participando de um campeonato.

**Caso exista o campeonato passado pelo ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("campeonato não encontrado!").

#### POST /time 

**Exemplo de URL**: http://localhost:3000/time

**Descrição**: Insere um novo time no banco de dados.

**Corpo da requisição:** em JSON:

```
{
    "nome": String,
    "fundacao": Date
}
```
**Exemplo de corpo da requisição:**

```
{
    "nome:" "Flamengo",
    "fundacao": "2023-09-09"
}
```

**Response**: application/json, HTTP Status 201 (Retorna o objeto do time criado).

#### POST /timesCampeonato

**Exemplo de URL**: http://localhost:3000/timeCampeonato

**Descrição**: Insere um novo time no banco de dados com um campeonato existente.


**Corpo da requisição:** em JSON:

```
{
    "nome": String (OPCIONAL),
    "fundacao": Date,
    "campeonatoId:" String
}
```
**Exemplo de corpo da requisição:**

```
{
  "nome": "Brasileirão",
  "fundacao": "2013-02-14",
  "campeonatoId":"8c5cf5d4-2cb4-4597-9930-110bf0759058"
}
```

**Caso tudo ocorra bem:**
**Response**: application/json, HTTP Status 200 (Objeto time criado).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("campeonato não encontrado!").

#### PUT /time/:id 

**Exemplo de URL**: http://localhost:3000/time/ddc9f36a-a12f-4a4b-9f6a-334efebea264

**Descrição**: Atualiza o registro de um time no banco de dados a partir do seu id.

**Corpo da requisição:** em JSON:

```
{
    "nome": String (OPCIONAL),
    "fundacao": Date (OPCIONAL)
}
```
**Exemplo de corpo da requisição:**

```
{
    "nome:" "Palmeiras",
    "fundacao": "2022-09-09"
}
```

**Caso o time seja inserido com sucesso:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso o time passado por id não exista e/ou seja encontrado:**
**Response**: application/json, HTTP Status 404 ("Nenhum time foi encontrado!").

#### DELETE /time/:id 

**Exemplo de URL**: http://localhost:3000/time/9857abfc-8d4f-4834-8bee-b23c7230a454

**Descrição**: Exclui um time pelo seu id.

**Caso exista o time passado pelo ID nos parâmetros da requisição:**
**Response**: application/json, HTTP Status 200 (OK).

**Caso contrário:**
**Response**: application/json, HTTP Status 404 ("Nenhum time foi encontrado!").