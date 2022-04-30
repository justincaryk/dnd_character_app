exports.up = knex =>
  knex.schema.createTable('races', table => {
    table.uuid('id').unique().notNullable()
    table.string('name').notNullable()
    table.text('summary')
    table.json('asis')
    table.integer('movement')
    table.string('size')
    table.specificType('languages', 'text ARRAY')
    table.text('lifespan')
    table.text('alignment')
  })

exports.down = knex => knex.schema.dropTable('races')
