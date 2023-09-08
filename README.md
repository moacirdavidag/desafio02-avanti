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