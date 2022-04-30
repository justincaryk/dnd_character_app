exports.up = knex =>
  knex.schema.raw(`
            create table if not exists diseases (
                id uuid primary key,
                name varchar (30) not null,
                source varchar (10),
                page int,
                entries json
            );
        `)

exports.down = knex => knex.schema.dropTable('diseases')
