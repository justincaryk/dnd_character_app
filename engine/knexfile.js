require('dotenv').config()
const { DATABASE, DATABASE_URL, CLIENT, PG_USER, PG_PASSWORD, DB_HOST, PG_PORT } = process.env

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
        client: CLIENT || 'pg',
        connection: DATABASE_URL || 'postgres://uqbluxdcbbield:b20fbfce2eabeb23349b0ff8bc2c0cd0c7b29cb8c3f078f7dabf9d979566c533@ec2-52-0-93-3.compute-1.amazonaws.com:5432/d6pp4voh9a9hdr',
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