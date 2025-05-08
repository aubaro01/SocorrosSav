

# SocorroSav

Uma web app para uma atividade de primeiros socorros


## Stack utilizada

**Front-end:** React.js, Bootstrap

**Back-end:** Node.js, Express.js, MongoDB


## Documentação da API

#### Retorna todos os utilizadores

```http
  GET /api/users
```

| Parâmetro   | Tipo       |                            |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` |

#### Retorna um utilizador

```http
  GET /api/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O nome do user que quer |


#### Retorna todos os exercícios


```http
  GET /api/exers
```

| Parâmetro   | Tipo       |                            |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` |

#### Retorna um exercício

```http
  GET /api/exerc/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O nome do exercício que quer |


#### Retorna todos os exercícios que foram realizados pelos users 

```http
  GET /api/ExerUser
```

| Parâmetro   | Tipo||
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | 

#### Retorna os exercícios de um user em especícifo

```http
  GET /api/ExerUser${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O nome do user que quer |






#### Retorna os users e o número de exercícios que eles fizeram 

```http
  GET /api/CountUsers
```

| Parâmetro   | Tipo       |                         |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` |

## Usado por

Esse projeto é usado pelas seguintes empresas:

- S.A.V.



