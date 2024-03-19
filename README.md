# Short Links APP

Essa aplicação foi desenvolvida com o objetivo de criar links encurtados e redirecionar para a URL original.

## Executando

Após clonar o repositório, acesse a pasta do projeto e execute os comandos abaixo:

```sh
docker compose up -d
pnpm install
pnpm run dev
```

Utilize o arquivo nas docs para observar as rotas da aplicação

```http
POST http://localhost:8080/api/links
Content-Type: application/json

{
    "code": "hemato",
    "url": "https://hemato.matthieu.com.br"
}

###

GET http://localhost:8080/api/links

###

GET http://localhost:8080/hemato

###

GET http://localhost:8080/api/metrics
```
