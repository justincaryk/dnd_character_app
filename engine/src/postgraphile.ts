import { postgraphile } from 'postgraphile'

const { 
    DATABASE, 
    PG_USER, 
    PG_PASSWORD, 
    DB_HOST, 
    PG_PORT, 
    OWNER_CONNECTION_STRING, 
    JWT_SECRET } = process.env

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
        jwtSecret: JWT_SECRET,
        jwtPgTypeIdentifier: 'public.jwt_token',
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        pgDefaultRole: 'anonymous_user',
        // ignoreRBAC: true, // Role Based Access Control (RBAC),
        ownerConnectionString: OWNER_CONNECTION_STRING
    }
)