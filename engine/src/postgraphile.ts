import { postgraphile } from 'postgraphile'

const { DATABASE, PG_USER, PG_PASSWORD, DB_HOST, PG_PORT, OWNER_CONNECTION_STRING } = process.env

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
        jwtSecret: 'kB1wo%5nrhlTFT@IH5SX01u2DL$TpCVSBxcMSxxitd37!PNZqWyacNXkM$TJNX2do&lJjM',
        jwtPgTypeIdentifier: 'public.jwt_token',
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        pgDefaultRole: 'anonymous_user',
        // ignoreRBAC: true, // Role Based Access Control (RBAC),
        ownerConnectionString: OWNER_CONNECTION_STRING
    }
)