exports.up = knex =>
  knex.schema.createTable('spell_slugs', table => {
    table.uuid('id').unique()
    table.string('slug').notNullable()
    table.string('name').notNullable()
    table.string('components').notNullable()
    table.string('level').notNullable()
    table.integer('level_int').notNullable()
    table.string('school')
    table.string('dnd_class').notNullable()
  })

exports.down = knex => knex.schema.dropTable('spell_slugs')
