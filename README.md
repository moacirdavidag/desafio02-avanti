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
  "data_inicio": "2013-02-14T13:15:03-08:00",
  "data_fim":"2014-02-14T13:15:03-08:00"
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




### CampeonatoTime

**Descrição** Define uma tabela de relação entre as entidades "Campeonato" e "time", permitindo a associação de múltiplos times a um campeonato e vice-versa, criando assim um relacionamento many-to-many (muitos para muitos) entre essas duas entidades.

## Estrutura

`campeonatoId:` Este campo é do tipo String e serve como uma chave estrangeira que faz referência ao ID de um campeonato. Isso indica qual campeonato está associado a este registro na tabela "CampeonatoTime".

`campeonato:` Este campo utiliza a diretiva `@relation` para estabelecer uma relação com a entidade "Campeonato". Ele especifica que a relação é baseada no campo campeonatoId deste modelo e faz referência ao campo id da entidade "Campeonato". 

A opção `onDelete: Cascade` indica que, se um campeonato for excluído, todas as associações correspondentes na tabela "CampeonatoTime" também serão excluídas.

`timeId:` Este campo é do tipo String e funciona de maneira semelhante ao campo campeonatoId, mas em relação a um time.

`time:` Assim como o campo campeonato, este campo utiliza a diretiva @relation para estabelecer uma relação com a entidade "Time". Ele especifica que a relação é baseada no campo timeId deste modelo e faz referência ao campo id da entidade "Time". A opção onDelete: Cascade também se aplica aqui, garantindo que as associações sejam excluídas se um time for removido.

## chave composta: 
`@@id([campeonatoId, timeId])` define uma chave composta para o modelo "CampeonatoTime". Isso significa que a combinação dos valores nos campos campeonatoId e timeId deve ser única na tabela. Essa chave composta garante que um time não pode ser associado ao mesmo campeonato mais de uma vez.

## nome da tabela:
`@@map("campeonatos_times")` especifica o nome da tabela no banco de dados onde os registros do modelo "CampeonatoTime" serão armazenados. Neste caso, a tabela será chamada "campeonatos_times".