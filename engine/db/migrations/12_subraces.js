exports.up = knex =>
  knex.schema.createTable('subraces', table => {
    table.uuid('id').unique().notNullable()
    table.string('name').notNullable()
    table.text('summary')
    table.json('asis')
    table.uuid('race_id').unsigned().references('id').inTable('races')
  })

exports.down = knex => knex.schema.dropTable('subraces')
