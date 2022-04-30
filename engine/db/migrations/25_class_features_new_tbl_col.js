exports.up = knex =>
  knex.schema.raw(`
            ALTER TABLE class_features
            ADD COLUMN has_options boolean;
        `)

exports.down = knex => knex.schema.dropTable('class_features')
