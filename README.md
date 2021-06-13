local development

1. follow readme in `/engine`
2. follow readme in `/client`
3. add `.env` file <sup>1</sup>
4. run `yarn`
5. run `yarn dev`

<sup>1</sup> .env
```.env
DATABASE=dnd
CLIENT=pg
PG_USER=your_user
PASSWORD=your_password
HOST=localhost
PG_PORT=5432

PORT=8080
```