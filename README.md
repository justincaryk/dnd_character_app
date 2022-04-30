local development

1. follow readme in `/engine`
2. follow readme in `/client`
3. add `.env` file <sup>1</sup>
4. run `yarn`
5. run `yarn dev`

<sup>1</sup> .env

```.env

DATABASE=dnd
CLIENT=postgres
PG_USER={your username}
PG_PASSWORD={your password}
URL=127.0.0.1
DB_HOST=127.0.0.1
PG_PORT=5432

SERVER_PORT=8080

```
