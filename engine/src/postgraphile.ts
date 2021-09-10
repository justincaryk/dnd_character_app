import { postgraphile } from 'postgraphile'

const { DATABASE, PG_USER, PG_PASSWORD, URL, PG_PORT } = process.env

export default postgraphile(
    {
        database: DATABASE,
        user: PG_USER,
        password: PG_PASSWORD,
        host: URL,
        port: parseInt(PG_PORT),
    },
    'public',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true
    }
)