exports.up = knex =>
  knex.schema.createTable('equipment', table => {
    table.uuid('id').unique()
    table.string('type').notNullable()
    table.string('name').notNullable()
  })

exports.down = knex => knex.schema.dropTable('equipment')
