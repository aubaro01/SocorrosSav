# SocorroSav

Uma web app para uma atividade de primeiros socorros


## Stack utilizada

**Front-end:** React.js, Bootstrap

**Back-end:** Node.js, Express.js, MongoDB


## Funcionalidades

- Registro de Capitões de Equipa
- Registro de Conclusão de Exercícios
- Multiplataforma

## Por melhorar

- Registro de utilizadores para o exercícios. 
- Associar utilizadores à um capitão por meio do circuito
 - Melhorias de usabilidade. 


## Documentação da API

#### Retorna todos os utilizadores

```http
  GET /api/users
```

| Parâmetro   | Tipo       |                            |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` |


#### Retorna todos os exercícios


```http
  GET /api/exers
```

| Parâmetro   | Tipo       |                            |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` |

#### Retorna um exercício

```http
  GET /api/exerc/${nome}
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
  GET /api/ExerUser${circuito}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O circuito do user que quer |


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
