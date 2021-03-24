require('dotenv').config()
const { DATABASE, CLIENT, PG_USER, PASSWORD, HOST, PG_PORT } = process.env

module.exports = {
    development: {
        client: CLIENT || 'postgres',
        connection: {
            database: DATABASE || 'dnd',
            user: PG_USER || 'postgres',
            password: PASSWORD || 'test',
            host: HOST || 'localhost',
            port: PG_PORT || '5432',
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};