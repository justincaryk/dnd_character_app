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
        jwtSecret: 'REMOVE_ME',
        jwtPgTypeIdentifier: 'public.jwt_token',
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        // ignoreRBAC: true, // Role Based Access Control (RBAC)
    }
)