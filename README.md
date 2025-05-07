
# SocorroSav

Uma web app para uma atividade de primeiros socorros




![Logo](
https://socorrosav.vercel.app/sav.ico)




## Stack utilizada

**Front-end:** React, Bootstrap

**Back-end:** Node, Express, MongoDB


## Documentação da API

#### Retorna todos os utilizadores

```http
  GET /api/users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um utilizador

```http
  GET /api/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do user que você quer |


#### Retorna todos os exercícios


```http
  GET /api/exers
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um exercício

```http
  GET /api/exerc/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do exercício que você quer |


#### Retorna todos os exercícios que foram realizados 

```http
  GET /api/ExerUser
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um user com o um exercício


```http
  GET /api/ExerUser${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do user que você quer |




