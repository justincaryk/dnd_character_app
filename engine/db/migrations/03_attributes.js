exports.up = knex =>
  knex.schema.createTable('attributes', function (table) {
    table.uuid('id').unique()
    table.string('attribute').notNullable()
  })

exports.down = knex => knex.schema.dropTable('attributes')
