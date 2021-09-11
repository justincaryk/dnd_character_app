require('dotenv').config()
const { DATABASE, CLIENT, PG_USER, PG_PASSWORD, DB_HOST, PG_PORT } = process.env

module.exports = {
    development: {
        client: CLIENT || 'postgres',
        connection: {
            database: DATABASE || 'dnd',
            user: PG_USER || 'postgres',
            password: PG_PASSWORD || 'test',
            host: DB_HOST || 'localhost',
            port: PG_PORT || '5432',
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: DATABASE,
            user: PG_USER,
            host: DB_HOST,
            password: PG_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    }

};