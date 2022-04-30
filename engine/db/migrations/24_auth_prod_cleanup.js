exports.up = knex =>
  knex.schema.raw(`
            GRANT USAGE ON SCHEMA public to anonymous_user;
            GRANT USAGE ON SCHEMA public to role_minion;
        `)

exports.down = knex => knex.schema.dropTable('subclass_features')
