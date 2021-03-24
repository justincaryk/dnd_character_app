import { postgraphile } from 'postgraphile'

const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT } = process.env

export default postgraphile(
    {
        database: DATABASE,
        user: PG_USER,
        password: PASSWORD,
        host: HOST,
        port: parseInt(PG_PORT),
    },
    'public',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true
    }
)