import { postgraphile } from 'postgraphile'

const { DATABASE, PG_USER, PG_PASSWORD, DB_HOST, PG_PORT } = process.env

export default postgraphile(
    {
        database: DATABASE,
        user: PG_USER,
        password: PG_PASSWORD,
        host: DB_HOST,
        port: parseInt(PG_PORT),
    },
    'public',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true
    }
)