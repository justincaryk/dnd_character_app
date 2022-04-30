exports.up = knex =>
  knex.schema.createTable('feats', table => {
    table.uuid('id').unique().notNullable()
    table.string('name').notNullable()
    table.text('desc').notNullable()
    table.specificType('points', 'text ARRAY')
    table.string('prereq')
  })

exports.down = knex => knex.schema.dropTable('feats')
